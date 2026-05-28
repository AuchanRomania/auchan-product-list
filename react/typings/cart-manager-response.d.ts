interface CartManagerResponse {
  data: {
    sgrSettings: {
      aluminumCanProducts: {
        label: string
        skuIds: string[]
      }
      glassBottleProducts: {
        label: string
        skuIds: string[]
      }
      plasticBottleProducts: {
        label: string
        skuIds: string[]
      }
    }
  }
  error: null | string
}
