import {
  CloudOutlined,
  FundProjectionScreenOutlined,
  InboxOutlined,
  VideoCameraOutlined,
  ForkOutlined,
  AppstoreOutlined,
  FolderOutlined,
} from "@ant-design/icons";

const products = [
  {
    family: "MAM4PRO",
    description: "Cloud Media Production",
    link: "",
    icon: <CloudOutlined />,
    models: [
      {
        name: "Virtual Media Operations",
        link: "",
      },
      {
        name: "Production Management",
        link: "",
      },
      {
        name: "Deploy Options",
        link: "",
      },
    ],
  },
  {
    family: "Vizzi",
    description: "OTT-TV Platform",
    link: "",
    icon: <FundProjectionScreenOutlined />,
    models: [
      {
        name: "Media Acquisition",
        link: "",
      },
      {
        name: "Media Preparation",
        link: "",
      },
      {
        name: "Media Management",
        link: "",
      },
      {
        name: "Distribution & Security",
        link: "",
      },
      {
        name: "Media Engagement",
        link: "",
      },
    ],
  },
  {
    family: "mDeck",
    description: "Professional Media Decks",
    link: "",
    icon: <InboxOutlined />,
    models: [
      {
        name: "Grand Series 4K",
        link: "",
      },
      {
        name: "Standard Series HD",
        link: "",
      },
      {
        name: "Densu Series HD Compact",
        link: "",
      },
    ],
  },
  {
    family: "mxfSPEEDRAIL",
    description: "Professional Media Gateways",
    link: "",
    icon: <VideoCameraOutlined />,
    models: [
      {
        name: "File Ingest & Transcoding",
        link: "",
      },
      {
        name: "Video Recorder",
        link: "",
      },
      {
        name: "Playback",
        link: "",
      },
      {
        name: "Encoder / Decoder",
        link: "",
      },
      {
        name: "Card Ingest",
        link: "",
      },
      {
        name: "Social Media Gateway",
        link: "",
      },
      {
        name: "Stream Server",
        link: "",
      },
    ],
  },
  {
    family: "Xpress",
    description: "High-Density IT Servers",
    link: "",
    icon: <ForkOutlined />,
    models: [
      {
        name: "2U Series",
        link: "",
      },
      {
        name: "1D Series",
        link: "",
      },
    ],
  },
  {
    family: "mediaLIBS",
    description: "Professional Media Libraries",
    link: "",
    icon: <FolderOutlined />,
    models: [
      {
        name: "IMF",
        link: "",
      },
      {
        name: "MXF",
        link: "",
      },
      {
        name: "GXF",
        link: "",
      },
    ],
  },
  {
    family: "StorEDIT",
    description: "Compact NAS",
    link: "",
    icon: <AppstoreOutlined  />,
    models: [
      {
        name: "SSD Storage",
        link: "",
      },
    ],
  },
];

export default products;
