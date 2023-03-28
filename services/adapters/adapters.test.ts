import { parseResponseProps, parseCarProps } from "./index";

describe('parseResponseProps', () => {
  it('should return a parsed object', () => {
    const data = {
      codigo: "1",
      nome: "Acura"
    }

    const parsedData = parseResponseProps(data)
    expect(parsedData).toStrictEqual({
      code: "1",
      name: "Acura"
    })
  });
});

describe('parseCarProps', () => {
  it('should return a parsed object', () => {
    const data = {
      TipoVeiculo: 1,
      Valor: "R$ 120.834,00",
      Marca: "VW - VolksWagen",
      Modelo: "AMAROK High.CD 2.0 16V TDI 4x4 Dies. Aut",
      AnoModelo: 2014,
      Combustivel: "Diesel",
      CodigoFipe: "005340-6",
      MesReferencia: "março de 2023",
      SiglaCombustivel: "D",
    }

    const parsedData = parseCarProps(data)
    expect(parsedData).toStrictEqual({
      "brand": "VW - VolksWagen",
      "code": "005340-6",
      "fuelInitial": "D",
      "fuelType": "Diesel",
      "model": "AMAROK High.CD 2.0 16V TDI 4x4 Dies. Aut",
      "price": "R$ 120.834,00",
      "referenceMonth": "março de 2023",
      "vehicleType": 1,
      "year": 2014,
    })
  });
});
