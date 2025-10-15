document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // =================== MAIN MAP ===================
  function mainMap() {
    const ib = new InfoBox();

    function locationData(
      mapImg,
      mapURL,
      mapTitle,
      mapLocation,
      avt,
      name,
      price
    ) {
      return `
        <div class="map-listing-item">
          <div class="inner-box">
            <div class="infoBox-close"><i class="icon icon-close2"></i></div>
            <div class="image-box"><img src="${mapImg}" alt=""></div>
            <div class="content">
              <p class="location">
                <span class="icon icon-mapPin"></span>
                <span class="text">${mapLocation}</span>
              </p>
              <div class="title"><a href="${mapURL}">${mapTitle}</a></div>
              <ul class="list-info">
                <li><span class="icon icon-bed"></span><span class="text-variant-1">Beds</span><span class="fw-6">4</span></li>
                <li><span class="icon icon-bath"></span><span class="text-variant-1">Baths:</span><span class="fw-6">2</span></li>
                <li><span class="icon icon-sqft"></span><span class="text-variant-1">Sqft:</span><span class="fw-6">1150</span></li>
              </ul>
              <div class="box-bottom">
                <div class="avt-box"><img src="${avt}" alt="">${name}</div>
                <div class="price">${price}</div>
              </div>
            </div>
          </div>
        </div>`;
    }

    const locations = [
      [
        locationData(
          "images/home/house-3.jpg",
          "property-details-v1.html",
          "Casa Lomas de Machalí Machas",
          "145 Brooklyn Ave, Califonia, New York",
          "images/avatar/avt-png10.png",
          "Arlene McCoy",
          "$7250,00"
        ),
        40.711536,
        -73.994601,
        1,
        "<div></div>",
      ],
      [
        locationData(
          "images/home/house-1.jpg",
          "property-details-v1.html",
          "Casa Lomas de Machalí Machas",
          "145 Brooklyn Ave, Califonia, New York",
          "images/avatar/avt-png10.png",
          "Arlene McCoy",
          "$7250,00"
        ),
        40.710885,
        -74.016245,
        2,
        "<div></div>",
      ],
      [
        locationData(
          "images/home/house-2.jpg",
          "property-details-v1.html",
          "Casa Lomas de Machalí Machas",
          "145 Brooklyn Ave, Califonia, New York",
          "images/avatar/avt-png10.png",
          "Arlene McCoy",
          "$7250,00"
        ),
        40.715504,
        -74.010316,
        3,
        "<div></div>",
      ],
    ];

    // ========== Rating ==========
    document.querySelectorAll(".numerical-rating").forEach((el) => {
      const dataRating = parseFloat(el.getAttribute("data-rating"));
      if (dataRating >= 4.0) el.classList.add("high");
      else if (dataRating >= 3.0) el.classList.add("mid");
      else el.classList.add("low");
    });

    document.querySelectorAll(".star-rating").forEach((el) => {
      const dataRating = parseFloat(el.getAttribute("data-rating"));
      const stars = (a, b, c, d, e) => `
        <span class="${a}"></span>
        <span class="${b}"></span>
        <span class="${c}"></span>
        <span class="${d}"></span>
        <span class="${e}"></span>`;

      let html = "";
      if (dataRating >= 4.75)
        html = stars("star", "star", "star", "star", "star");
      else if (dataRating >= 4.25)
        html = stars("star", "star", "star", "star", "star half");
      else if (dataRating >= 3.75)
        html = stars("star", "star", "star", "star", "star empty");
      else if (dataRating >= 3.25)
        html = stars("star", "star", "star", "star half", "star empty");
      else if (dataRating >= 2.75)
        html = stars("star", "star", "star", "star empty", "star empty");
      else if (dataRating >= 2.25)
        html = stars("star", "star", "star half", "star empty", "star empty");
      else if (dataRating >= 1.75)
        html = stars("star", "star", "star empty", "star empty", "star empty");
      else if (dataRating >= 1.25)
        html = stars(
          "star",
          "star half",
          "star empty",
          "star empty",
          "star empty"
        );
      else
        html = stars(
          "star",
          "star empty",
          "star empty",
          "star empty",
          "star empty"
        );
      el.insertAdjacentHTML("beforeend", html);
    });

    const mapElem = document.getElementById("map");
    if (!mapElem) return;
    const zoomLevel = parseInt(mapElem.dataset.mapZoom) || 5;
    const scrollEnabled = !!mapElem.dataset.mapScroll;

    const map = new google.maps.Map(mapElem, {
      zoom: zoomLevel,
      scrollwheel: false,
      center: new google.maps.LatLng(40.709295, -74.003099),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      gestureHandling: "cooperative",
    });

    // ========== Custom Marker ==========
    const allMarkers = [];
    const boxText = document.createElement("div");
    boxText.className = "map-box";

    locations.forEach((loc, i) => {
      const overlayPos = new google.maps.LatLng(loc[1], loc[2]);
      const overlay = new CustomMarker(
        overlayPos,
        map,
        { marker_id: i },
        loc[4]
      );
      allMarkers.push(overlay);
      google.maps.event.addDomListener(overlay, "click", () => {
        ib.setContent(loc[0]);
        ib.open(map, overlay);
      });
    });

    window.addEventListener("resize", () => {
      const center = map.getCenter();
      google.maps.event.trigger(map, "resize");
      map.setCenter(center);
    });

    // ========== Zoom Control ==========
    const zoomControlDiv = document.createElement("div");
    zoomControlDiv.className = "zoomControlWrapper";
    const zoomInButton = document.createElement("div");
    zoomInButton.className = "custom-zoom-in";
    const zoomOutButton = document.createElement("div");
    zoomOutButton.className = "custom-zoom-out";
    zoomControlDiv.append(zoomInButton, zoomOutButton);
    map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(zoomControlDiv);

    zoomInButton.addEventListener("click", () =>
      map.setZoom(map.getZoom() + 1)
    );
    zoomOutButton.addEventListener("click", () =>
      map.setZoom(map.getZoom() - 1)
    );

    // ========== Geolocation ==========
    const geoButtons = document.querySelectorAll(
      "#geoLocation, .input-with-icon.location a"
    );
    geoButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((pos) => {
            const userPos = new google.maps.LatLng(
              pos.coords.latitude,
              pos.coords.longitude
            );
            map.setCenter(userPos);
            map.setZoom(12);
          });
        }
      });
    });
  }

  // ========== INIT ==========
  if (document.getElementById("map")) {
    google.maps.event.addDomListener(window, "load", mainMap);
  }

  // ========== Custom Marker Class ==========
  function CustomMarker(latlng, map, args, markerIco) {
    this.latlng = latlng;
    this.args = args;
    this.markerIco = markerIco;
    this.setMap(map);
  }
  CustomMarker.prototype = new google.maps.OverlayView();
  CustomMarker.prototype.draw = function () {
    const self = this;
    if (!this.div) {
      const div = (this.div = document.createElement("div"));
      div.className = "map-marker-container";
      div.innerHTML = `
        <div class="marker-container">
          <div class="marker-card">
            <div class="front face">${self.markerIco}</div>
            <div class="back face">${self.markerIco}</div>
            <div class="marker-arrow"></div>
          </div>
        </div>`;
      div.addEventListener("click", () => {
        document
          .querySelectorAll(".map-marker-container")
          .forEach((el) => el.classList.remove("clicked", "infoBox-opened"));
        google.maps.event.trigger(self, "click");
        div.classList.add("clicked", "infoBox-opened");
      });
      if (self.args.marker_id !== undefined)
        div.dataset.marker_id = self.args.marker_id;
      const panes = this.getPanes();
      panes.overlayImage.appendChild(div);
    }
    const point = this.getProjection().fromLatLngToDivPixel(this.latlng);
    if (point) {
      this.div.style.left = point.x + "px";
      this.div.style.top = point.y + "px";
    }
  };
  CustomMarker.prototype.remove = function () {
    if (this.div) {
      this.div.parentNode.removeChild(this.div);
      this.div = null;
    }
  };
  CustomMarker.prototype.getPosition = function () {
    return this.latlng;
  };
});
