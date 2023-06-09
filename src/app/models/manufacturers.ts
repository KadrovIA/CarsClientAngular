export interface IManufacturer {
  id: number,
  name: string,
  country: string
}

export interface  IBrand {
  id: number,
  manufacturer: IManufacturer,
  name: string,
  color: string,
  cost: number
}
