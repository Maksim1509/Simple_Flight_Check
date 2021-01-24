const flightDataParse = (data) => {
  const parsedData = data.Quotes.map((quote) => {
    const id = quote.QuoteId;
    const price = quote.MinPrice;
    const carrierId = quote.OutboundLeg.CarrierIds[0];
    const carrier = data.Carriers.find((car) => car.CarrierId === carrierId).Name;
    return { id, price, carrier };
  });
  return parsedData;
};

export default flightDataParse;
