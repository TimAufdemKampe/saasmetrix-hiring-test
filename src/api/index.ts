import axios from "axios";

export const API_SEED = "567d093f-bc49-4696-a898-5ca8aa857300";

const client = axios.create({
  baseURL: "https://randomuser.me/api/",
});

export const api = {
  getMembers: (extraQuery?: string): unknown =>
    client.get("?results=100&seed=" + API_SEED + (extraQuery || "")),
};
