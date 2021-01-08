import { GeolocalizacaoModel } from "./geolocalizacao.model";

export class EnderecoModel{
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: GeolocalizacaoModel;
}