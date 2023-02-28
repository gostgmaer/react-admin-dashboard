import { useTheme } from '@mui/material';
// import { ResponsiveChoropleth } from '@nivo/geo';
import { ResponsiveChoropleth } from '@nivo/geo';
import React from 'react'
import { geoFeatures } from '../../assets/mockData/mockGeoData';
import { tokens } from '../../theme';

const GeoGraphyChart = ({ data, isDashboard }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <ResponsiveChoropleth
            data={data}
            theme={{
                axis: {
                  domain: {
                    line: {
                      stroke: colors.grey[100],
                    },
                  },
                  legend: {
                    text: {
                      fill: colors.grey[100],
                    },
                  },
                  ticks: {
                    line: {
                      stroke: colors.grey[100],
                      strokeWidth: 1,
                    },
                    text: {
                      fill: colors.grey[100],
                    },
                  },
                },
                tooltip:{
                    container:{
                        color:colors.primary[500]
                    }
                },
                legends: {
                  text: {
                    fill: colors.grey[100],
                  },
                },
              }}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
           
            domain={[0, 1000000]}
            unknownColor="#666666"
            features={geoFeatures.features}
            label="properties.name"
            projectionScale={isDashboard?40:120}
            valueFormat=".2s"
            projectionTranslation={isDashboard?[0.49, 0.6]:[0.5, 0.5]}
            projectionRotation={[0, 0, 0]}
            // enableGraticule={true}
            // graticuleLineColor="#dddddd"
            borderWidth={0.5}
            borderColor="#152538"
           // @ts-ignore
            // defs={[
            //     {
            //         id: 'dots',
            //         type: 'patternDots',
            //         background: 'inherit',
            //         color: '#38bcb2',
            //         size: 4,
            //         padding: 1,
            //         stagger: true
            //     },
            //     {
            //         id: 'lines',
            //         type: 'patternLines',
            //         background: 'inherit',
            //         color: '#eed312',
            //         rotation: -45,
            //         lineWidth: 6,
            //         spacing: 10
            //     },
            //     {
            //         id: 'gradient',
            //         type: 'linearGradient',
            //         colors: [
            //             {
            //                 offset: 0,
            //                 color: '#000'
            //             },
            //             {
            //                 offset: 100,
            //                 color: 'inherit'
            //             }
            //         ]
            //     }
            // ]}
            // fill={[
            //     {
            //         match: {
            //             id: 'CAN'
            //         },
            //         id: 'dots'
            //     },
            //     {
            //         match: {
            //             id: 'CHN'
            //         },
            //         id: 'lines'
            //     },
            //     {
            //         match: {
            //             id: 'ATA'
            //         },
            //         id: 'gradient'
            //     }
            // ]}
            legends={isDashboard?undefined:[
                {
                    anchor: 'bottom-left',
                    direction: 'column',
                    justify: true,
                    translateX: 20,
                    translateY: -100,
                    itemsSpacing: 0,
                    itemWidth: 94,
                    itemHeight: 18,
                    itemDirection: 'left-to-right',
                    itemTextColor: colors.grey[100],
                    itemOpacity: 0.85,
                    symbolSize: 18,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000000',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    )
}

export default GeoGraphyChart