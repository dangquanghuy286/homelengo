document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // =================== MAIN MAP ===================
  function mainMap() {
    const ib = new InfoBox();
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
      styles: [
        { elementType: "geometry", stylers: [{ color: "#f9f9f9" }] },
        { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#f9f9f9" }] },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels.text.fill",
          stylers: [{ color: "#bdbdbd" }],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [{ color: "#f5f5f5" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#e5e5e5" }],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#ffffff" }],
        },
        {
          featureType: "road.arterial",
          elementType: "labels.text.fill",
          stylers: [{ color: "#757575" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#dadada" }],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#616161" }],
        },
        {
          featureType: "transit.line",
          elementType: "geometry",
          stylers: [{ color: "#e5e5e5" }],
        },
        {
          featureType: "transit.station",
          elementType: "geometry",
          stylers: [{ color: "#eeeeee" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#e3e3e3" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9e9e9e" }],
        },
      ],
    });

    window.addEventListener("resize", () => {
      const center = map.getCenter();
      google.maps.event.trigger(map, "resize");
      map.setCenter(center);
    });

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
});
