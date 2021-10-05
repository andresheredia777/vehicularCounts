import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getConteosSaga, generateCsv } from '../../actions';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import styles from './styles';


class Home extends Component {
  constructor() {
    super();
    this.state = {
      conteo: undefined,
      showingInfoWindow: false,
      url: ''
    }
  }
  componentDidMount() {
    this.props.getConteosSaga();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.url !== this.props.url) {
      //DESCARGA L CSV
      window.open(`${this.props.url}`, "_self")
    }
  }


  onMarkerClick = (conteo) => {
    this.setState({
      showingInfoWindow: true,
      conteo: conteo
    });
  }

  onInfoWindowClose = () =>
    this.setState({
      showingInfoWindow: false
    });

  onMapClicked = () => {
    this.setState({
      showingInfoWindow: false
    });
  };
  downloadCSV = () => {
    this.props.generateCsv();
  }


  render() {
    const conteos = this.props.coordenadas.datos.Items;
    return (
      <div className="map-area" >
        <Map
          google={this.props.google}
          zoom={9}
          center={{
            lat: -2.90055,
            lng: -79.00453
          }}
          onClick={() => this.onMapClicked}
          style={styles.mainContainer}
        >

          <InfoWindow
            position={{
              lat: parseFloat(this.state.conteo ? this.state.conteo.coordenadas.latitud : null),
              lng: parseFloat(this.state.conteo ? this.state.conteo.coordenadas.longitud : null)
            }}
            onClose={this.onInfoWindowClose}
            visible={this.state.showingInfoWindow}>
            <ul>
              <li>Coches:  {this.state.conteo ? this.state.conteo.conteos.carros : '0'}</li>
              <li>Motos-Bicicletas: {this.state.conteo ? this.state.conteo.conteos.motos : '0'}</li>
              <li>Peatones: {this.state.conteo ? this.state.conteo.conteos.personas : '0'}</li>
              <li>Camiones: {this.state.conteo ? this.state.conteo.conteos.camiones : '0'}</li>
              <li>Autobúses: {this.state.conteo ? this.state.conteo.conteos.buses : '0'}</li>
            </ul>
          </InfoWindow>
          {
            conteos && (
              conteos.map((conteo, indexConteo) => {
                return (
                  <Marker key={indexConteo}
                    position={{
                      lat: conteo.coordenadas.latitud,
                      lng: conteo.coordenadas.longitud
                    }}
                    onClick={() => this.onMarkerClick(conteo)}
                  />
                )
              })
            )
          }
         
        </Map>
        <button style={styles.button} onClick={this.downloadCSV}>Conteos (Csv)</button>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  coordenadas: state.coordenadasUser,
  url: state.coordenadasUser.url
});

const mapDispatchToProps = dispatch => ({
  getConteosSaga: () => dispatch(getConteosSaga()),
  generateCsv: () => dispatch(generateCsv())

});
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY

})(connect(mapStateToProps, mapDispatchToProps)(Home));
