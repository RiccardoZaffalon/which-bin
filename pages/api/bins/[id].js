import scrape from "../../../helpers/scrape";

export default async function handler(req, res) {
    const {
      query: { id },
    } = req

    const selector = `#svuotamenti_${id} tr td`;
    const bins = await scrape(selector);
  
    res.status(200).json(bins);
}