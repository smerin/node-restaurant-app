function autocomplete(input, latInput, lngInput) {
  if (!input) return;

  // var observerHack = new MutationObserver(function() {
  //   observerHack.disconnect();
  //   input.attr("autocomplete", "new-password");
  // });

  // observerHack.observe(autocompleteInput, {
  //   attributes: true,
  //   attributeFilter: ["autocomplete"]
  // });

  const dropdown = new google.maps.places.Autocomplete(input);

  dropdown.addListener("place_changed", () => {
    const place = dropdown.getPlace();
    console.log(place);
    latInput.value = place.geometry.location.lat();
    lngInput.value = place.geometry.location.lng();
  });

  // If user hits enter on address field, don't submit form
  input.on("keydown", e => {
    if (e.keyCode === 13) e.preventDefault();
  });
}

export default autocomplete;
