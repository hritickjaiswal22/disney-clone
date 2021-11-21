import { data } from "../../data/moviesData";

export default function handler(req, res) {
  res.status(200).json(data);
}
