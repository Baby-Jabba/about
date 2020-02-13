# About
TripAdvisor About Widget

**API**
----

* **URL**

  /api/about/:id

* **Method:**

  `GET` | `POST` | `DELETE` | `PUT`

*  **URL Params**

   **Required:**

   `id=[integer]`

   **Optional:**
   `pick which parameters to change in a put request`<br>
   `average=[number 0-5 to tenths place]`<br>
   `location=[number 0-5 to tenths place]`<br>
   `cleanliness=[number 0-5 to tenths place]`<br>
   `service=[number 0-5 to tenths place]`<br>
   `value=[number 0-5 to tenths place]`<br>

* **Sample Call:**

  get request: `curl {url}/1`<br>
  post request: `curl --request POST {url}/1`<br>
  delete request: `curl --request DELETE {url}/1`<br>
  put request: `curl --request PUT {url}/1?average=2.6`<br>

