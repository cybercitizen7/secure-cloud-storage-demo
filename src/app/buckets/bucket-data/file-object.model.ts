export class FileObject {
  public name: string;
  public modified: string;
  public size: number;

  constructor( name: string, modified: string, size: number ) {
    this.name = name;
    this.modified  = modified;
    this.size = size;
  }
}
