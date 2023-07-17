import { FeatureCollection } from '@turf/turf';
import { GeoJsonProperties, Geometry } from 'geojson';
import type { LayerProps } from 'react-map-gl';

const HIDE_AFTER_ZOOM = 11;

export const clusterLayer: LayerProps = {
  id: 'clusters',
  type: 'circle',
  // source: 'earthquakes',
  filter: ['has', 'point_count'],
  maxzoom: HIDE_AFTER_ZOOM,
  paint: {
    'circle-color': 'rgba(255, 255, 255, 0.8)',
    'circle-stroke-color': 'rgba(255, 255, 255, 0.5)',
    'circle-stroke-width': 8,
    'circle-radius': 20,
  },
};

export const clusterCountLayer: LayerProps = {
  id: 'cluster-count',
  type: 'symbol',
  source: 'earthquakes',
  filter: ['has', 'point_count'],
  maxzoom: HIDE_AFTER_ZOOM,
  layout: {
    'text-field': '{point_count_abbreviated}',
    'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
    // "text-font": ["Avenir LT Pro Bold", "Arial Unicode MS Regular"],
    'text-size': 16,
  },
  paint: {
    'text-color': '#2d64b3',
  },
};

export const unclusteredPointLayer: LayerProps = {
  id: 'unclustered-point',
  type: 'symbol',
  source: 'earthquakes',
  filter: ['!', ['has', 'point_count']],
  maxzoom: HIDE_AFTER_ZOOM,
  // paint: {
  //   'icon-opacity': [
  //     'interpolate',
  //     ['linear'],
  //     ['zoom'],
  //     HIDE_AFTER_ZOOM,
  //     1,
  //     HIDE_AFTER_ZOOM + 0.001,
  //     0,
  //   ],
  // },
  layout: {
    'icon-image': 'map-pin',
  },
};

export const fieldShapeLayer: LayerProps = {
  id: 'fieldShape',
  type: 'fill',
  source: 'fieldShapes',
  minzoom: HIDE_AFTER_ZOOM,
  paint: {
    'fill-antialias': true,
    'fill-opacity': [
      'case',
      ['boolean', ['feature-state', 'hover'], false],
      0.9,
      ['boolean', ['feature-state', 'selected'], false],
      0.9,
      0.5,
    ],
    'fill-color': [
      'case',
      ['boolean', ['feature-state', 'selected'], false],
      '#FFA001',
      '#FFFFFF',
    ],
    'fill-outline-color': '#ffffff',
  },
};

export const fieldShapes: FeatureCollection<Geometry, GeoJsonProperties> = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      id: 1,
      properties: {
        id: '1c101257-a03d-4b4d-89db-e8069e3d68cb',
      },
      geometry: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [-48.2413556, -17.4043225],
              [-48.3021935, -17.404595],
              [-48.3007654, -17.5203908],
              [-48.2396419, -17.5206632],
              [-48.2413556, -17.4043225],
            ],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      id: 2,
      properties: {
        id: '2d7acd49-d1dd-4ef3-866f-369253facb8d',
      },
      geometry: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [-87.6190789, 41.8865845],
              [-87.6190789, 41.8854897],
              [-87.616285, 41.8855335],
              [-87.616285, 41.8865626],
              [-87.6190789, 41.8865845],
            ],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      id: 3,
      properties: {
        id: '3137c633-033d-4611-8451-bbbe47d77b77',
      },
      geometry: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [-84.3357883, 34.4811799],
              [-84.3355567, 34.4807761],
              [-84.3351781, 34.480464],
              [-84.3346615, 34.4803685],
              [-84.3338509, 34.4799647],
              [-84.333165, 34.4812276],
              [-84.3340246, 34.4819803],
              [-84.3357883, 34.4811799],
            ],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      id: 4,
      properties: {
        id: '46b0cf7b-5ce8-467d-9efb-d0263cdb4f55',
      },
      geometry: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [-42.7861165, -16.5978697],
              [-42.7905887, -16.6026317],
              [-42.7853711, -16.6045841],
              [-42.7822406, -16.5990602],
              [-42.7861165, -16.5978697],
            ],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      id: 5,
      properties: {
        id: '49775d88-15fa-445c-b06d-4ce588c4a237',
      },
      geometry: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [-87.6202671, 41.888047],
              [-87.620176, 41.8852669],
              [-87.6158404, 41.8853347],
              [-87.6159497, 41.8878978],
              [-87.6202671, 41.888047],
            ],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      id: 6,
      properties: {
        id: '55428d33-a1e2-427f-a6e0-c315841a5273',
      },
      geometry: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [-47.2085404, -1.1703928],
              [-47.1983149, -1.1701068],
              [-47.1981682, -1.1387168],
              [-47.2099052, -1.1385701],
              [-47.2085404, -1.1703928],
            ],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      id: 7,
      properties: {
        id: '661dc3c7-b030-4094-bbca-2e9df4ad487d',
      },
      geometry: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [-48.2153067, -17.4510434],
              [-48.208987, -17.451575],
              [-48.2088844, -17.4488053],
              [-48.2159226, -17.4485255],
              [-48.2153067, -17.4510434],
            ],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      id: 8,
      properties: {
        id: '6ca324b8-52b0-4fd1-9ac1-b45b48cf8758',
      },
      geometry: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [-49.1029011, -26.8845171],
              [-49.104003, -26.8865516],
              [-49.1010066, -26.8877758],
              [-49.1003107, -26.8854999],
              [-49.1029011, -26.8845171],
            ],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      id: 9,
      properties: {
        id: '718f2a11-1d91-4ffe-8cea-a4ac11da3900',
      },
      geometry: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [-48.314767, -17.549838],
              [-48.3151559, -17.6614132],
              [-48.2132648, -17.6614132],
              [-48.2105425, -17.5505796],
              [-48.314767, -17.549838],
            ],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      id: 10,
      properties: {
        id: '81023609-c21c-4923-bbcf-c271e2c72959',
      },
      geometry: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [-48.5259167, -4.7466072],
              [-48.5292054, -4.749712],
              [-48.5282448, -4.7506669],
              [-48.5255783, -4.7505487],
              [-48.526613, -4.7522687],
              [-48.5299469, -4.7521206],
              [-48.5330674, -4.7516915],
              [-48.5308623, -4.7499661],
              [-48.5321676, -4.7489134],
              [-48.5341209, -4.7487114],
              [-48.5330669, -4.7476312],
              [-48.533077, -4.7458871],
              [-48.5343115, -4.7463459],
              [-48.5354182, -4.7452592],
              [-48.535098, -4.741478],
              [-48.5363247, -4.7386874],
              [-48.5354447, -4.7379895],
              [-48.5316517, -4.7405991],
              [-48.5299273, -4.7398758],
              [-48.5276508, -4.7416841],
              [-48.5264022, -4.7440887],
              [-48.5259167, -4.7466072],
            ],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      id: 11,
      properties: {
        id: 'a9203469-c3f7-4f9f-b94b-98b3a6b3309b',
      },
      geometry: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [-48.2155755, -17.4459306],
              [-48.2157932, -17.4479036],
              [-48.208858, -17.4486156],
              [-48.2087958, -17.4479481],
              [-48.2155755, -17.4459306],
            ],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      id: 12,
      properties: {
        id: 'af391052-b3d7-4ebd-98c4-5570c86243e5',
      },
      geometry: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [-84.3358911, 34.481165],
              [-84.3351909, 34.4828654],
              [-84.3363435, 34.4833626],
              [-84.3376415, 34.4826833],
              [-84.3381855, 34.4813115],
              [-84.3367259, 34.4808986],
              [-84.3358911, 34.481165],
            ],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      id: 13,
      properties: {
        id: 'c6b70d2d-d8a2-4ca6-a3d2-abd6b450c5d6',
      },
      geometry: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [-48.4337757, -19.267507],
              [-48.4383436, -19.2818986],
              [-48.4324409, -19.2831865],
              [-48.4289408, -19.268207],
              [-48.4337757, -19.267507],
            ],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      id: 14,
      properties: {
        id: 'd3499a05-ace6-4fe2-a689-0206de82ea09',
      },
      geometry: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [-45.1265056, -17.9726986],
              [-45.12695, -17.9743672],
              [-45.1249351, -17.9733581],
              [-45.1265056, -17.9726986],
            ],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      id: 15,
      properties: {
        id: 'e2863f33-95fc-4b8a-a321-5a50170f35ec',
      },
      geometry: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [-48.162626, -17.4319034],
              [-48.1620387, -17.5587912],
              [-48.0903838, -17.5587912],
              [-48.0924395, -17.4333043],
              [-48.162626, -17.4319034],
            ],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      id: 16,
      properties: {
        id: 'eee0e9f9-e080-492c-8653-f864cbe6d4b5',
      },
      geometry: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [-48.2102949, -7.0630886],
              [-48.2125575, -7.0659491],
              [-48.2090706, -7.06781],
              [-48.2086987, -7.0681022],
              [-48.2073815, -7.06781],
              [-48.2065601, -7.0680407],
              [-48.2063897, -7.0682868],
              [-48.2041581, -7.0650725],
              [-48.204964, -7.0649187],
              [-48.2063277, -7.0645804],
              [-48.2080014, -7.063796],
              [-48.2084818, -7.0637653],
              [-48.2089622, -7.0637653],
              [-48.2102949, -7.0630886],
            ],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      id: 17,
      properties: {
        id: 'fd34494e-a7e4-462a-962b-9d1ec74742b9',
      },
      geometry: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [-46.868721, -15.0829012],
              [-46.8749716, -15.09595],
              [-46.8641598, -15.1057361],
              [-46.8334137, -15.0789864],
              [-46.868721, -15.0829012],
            ],
          ],
        ],
      },
    },
  ],
};
