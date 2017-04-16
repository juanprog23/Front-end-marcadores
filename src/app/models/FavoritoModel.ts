//Se crea el modelo de datos con el que se trabajará para las operaciones locales y se exporta
//A data model is created for make the local operations and this must be exported

export class FavoritoModel{

  constructor(
  public _id:String,
  public title:String,
  public description:String,
  public url:String)
  {}

};
