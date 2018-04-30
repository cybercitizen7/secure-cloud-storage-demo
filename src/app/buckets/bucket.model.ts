import {Location} from './location.model';

export class Bucket {
  public id: string;
  public name: string;
  public location: Location;

  constructor( id: string, name: string, location: Location ) {
    this.id = id;
    this.name = name;
    this.location = location;
  }
}
