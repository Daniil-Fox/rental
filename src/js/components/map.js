import { pointsSlider } from "./sliders.js";
let map = null;
main();
async function main() {
  await ymaps3.ready;
  const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer} = ymaps3;

  const {YMapDefaultMarker} = await ymaps3.import('@yandex/ymaps3-markers@0.0.1');

  map = new YMap(
    document.getElementById('map'),
    {location: {
      center: [60.810034, 56.502286],
      zoom: 13
    }, showScaleInCopyrights: true},
    [
      new YMapDefaultSchemeLayer({}),
      new YMapDefaultFeaturesLayer({})
    ]
  );
  const defaultColor = '#01BBEA'
  const activeColor = '#FF2400'
  const markersGeoJsonSource = [
    {
      coordinates: [60.808920, 56.496334],
      color: activeColor
    },
    {
      coordinates: [60.818920, 56.498334],
      color: defaultColor
    },
    {
      coordinates: [60.829920, 56.498334],
      color: defaultColor
    },

  ]

  const groupMarkers = []
  markersGeoJsonSource.forEach((markerSource) => {
    const marker = new YMapDefaultMarker(markerSource);
    marker.onClick = (e) => {
      console.log('click')
      pointsSlider.slideTo(index)
    }
    groupMarkers.push(marker)
    map.addChild(marker);
  });

  pointsSlider.on('slideChange', (swiper) => {
    groupMarkers.forEach(marker => {
      marker.update({color: defaultColor})
    })
    groupMarkers[swiper.activeIndex].update({color: activeColor})
  })


}

