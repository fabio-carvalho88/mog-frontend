
import styles from '../styles/Home.module.css';
import { Button, Row, Col, Carousel, Image } from 'antd';
import CardHighlight from '../components/Card/CardHighlight';
import CardHorizontal from '../components/Card/CardHorizontal';
import HomeCarousel from '../components/Carousel/HomeCarousel';
import Filter from "../components/Tabs/Tabs";
import Btn from "../components/Buttons/Button";
import CardItemDark from "../components/Cards/CarditemDark";
import Cloud from "../assets/icons/Cloud";

export default function Home() {
  const logos = [
    {
      id: 1,
      name: "disney",
      src: "https://westeurope1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fmogtech-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!9NVpun5cBUSTgB1u6Ql5nbONXiefSdNLqmlp4_iXz-TjnyIBfOcsTYD7McCuw6cp%2Fitems%2F014OKNYIYIC3PXISLL2FDL3ZPNNKHRL4DD%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbW9ndGVjaC1teS5zaGFyZXBvaW50LmNvbUAzZDQ0OThiYi05MGJkLTQ5ZjktYjIzYi0yNTYzNTFhOGJmNGEiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNjIxODY4NDAwIiwiZXhwIjoiMTYyMTg5MDAwMCIsImVuZHBvaW50dXJsIjoieWJsT1BTUGpkWkVoR0ZxeERZMVFWTDJYRTlCSDAvVjBtRVYxOHpYQTJwQT0iLCJlbmRwb2ludHVybExlbmd0aCI6IjExNyIsImlzbG9vcGJhY2siOiJUcnVlIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlltRTJPV1ExWmpRdE5XTTNaUzAwTkRBMUxUa3pPREF0TVdRMlpXVTVNRGszT1RsayIsIm5hbWVpZCI6IjAjLmZ8bWVtYmVyc2hpcHxmYWJpby5jYXJ2YWxob0Btb2ctdGVjaG5vbG9naWVzLmNvbSIsIm5paSI6Im1pY3Jvc29mdC5zaGFyZXBvaW50IiwiaXN1c2VyIjoidHJ1ZSIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfDEwMDMyMDAwOWNjYWVhNWJAbGl2ZS5jb20iLCJ0dCI6IjAiLCJ1c2VQZXJzaXN0ZW50Q29va2llIjoiMiJ9.eTN5SGI1a2JkVUdKV1lSRlpMaXl4NWFuNkh5YXN2Rkl0MWQwVm03K0svdz0&encodeFailures=1&width=400&height=166&srcWidth=1600&srcHeight=662",
    },
    {
      id: 2,
      name: "bbc",
      src: "https://westeurope1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fmogtech-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!9NVpun5cBUSTgB1u6Ql5nbONXiefSdNLqmlp4_iXz-TjnyIBfOcsTYD7McCuw6cp%2Fitems%2F014OKNYI2H3ZOZ77GQHVE352NHJT3RVY75%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbW9ndGVjaC1teS5zaGFyZXBvaW50LmNvbUAzZDQ0OThiYi05MGJkLTQ5ZjktYjIzYi0yNTYzNTFhOGJmNGEiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNjIxNTk4NDAwIiwiZXhwIjoiMTYyMTYyMDAwMCIsImVuZHBvaW50dXJsIjoieWJsT1BTUGpkWkVoR0ZxeERZMVFWTDJYRTlCSDAvVjBtRVYxOHpYQTJwQT0iLCJlbmRwb2ludHVybExlbmd0aCI6IjExNyIsImlzbG9vcGJhY2siOiJUcnVlIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlltRTJPV1ExWmpRdE5XTTNaUzAwTkRBMUxUa3pPREF0TVdRMlpXVTVNRGszT1RsayIsIm5hbWVpZCI6IjAjLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2Fhbm9uI2Y1MjE3ZDg2YmUyYTZiNDRhYjc2MTU0ZWRhZThiNmQ0YWNjZWE0MTlhZDQ5MGQwYTBkMDM5MGNhNDIwNjJlY2UiLCJuaWkiOiJtaWNyb3NvZnQuc2hhcmVwb2ludCIsImlzdXNlciI6InRydWUiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2Fhbm9uI2Y1MjE3ZDg2YmUyYTZiNDRhYjc2MTU0ZWRhZThiNmQ0YWNjZWE0MTlhZDQ5MGQwYTBkMDM5MGNhNDIwNjJlY2UiLCJzaGFyaW5naWQiOiJQRTRlZXA1SVEwNjBYNlZLNUlTOEdnIiwidHQiOiIwIiwidXNlUGVyc2lzdGVudENvb2tpZSI6IjIifQ.bTU2ZllBTEJJbFRxVFFjbWgvL09laHlIemJVQ01IRmZ6blI2ZW42R0k2dz0&encodeFailures=1&width=1920&height=940&srcWidth=&srcHeight=",
    },
    {
      id: 3,
      name: "cbs",
      src: "https://westeurope1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fmogtech-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!9NVpun5cBUSTgB1u6Ql5nbONXiefSdNLqmlp4_iXz-TjnyIBfOcsTYD7McCuw6cp%2Fitems%2F014OKNYI6FFFUGBFTRWBC37OH7HJHW2RTD%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbW9ndGVjaC1teS5zaGFyZXBvaW50LmNvbUAzZDQ0OThiYi05MGJkLTQ5ZjktYjIzYi0yNTYzNTFhOGJmNGEiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNjIxNTk4NDAwIiwiZXhwIjoiMTYyMTYyMDAwMCIsImVuZHBvaW50dXJsIjoieWJsT1BTUGpkWkVoR0ZxeERZMVFWTDJYRTlCSDAvVjBtRVYxOHpYQTJwQT0iLCJlbmRwb2ludHVybExlbmd0aCI6IjExNyIsImlzbG9vcGJhY2siOiJUcnVlIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlltRTJPV1ExWmpRdE5XTTNaUzAwTkRBMUxUa3pPREF0TVdRMlpXVTVNRGszT1RsayIsIm5hbWVpZCI6IjAjLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2Fhbm9uI2Y1MjE3ZDg2YmUyYTZiNDRhYjc2MTU0ZWRhZThiNmQ0YWNjZWE0MTlhZDQ5MGQwYTBkMDM5MGNhNDIwNjJlY2UiLCJuaWkiOiJtaWNyb3NvZnQuc2hhcmVwb2ludCIsImlzdXNlciI6InRydWUiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2Fhbm9uI2Y1MjE3ZDg2YmUyYTZiNDRhYjc2MTU0ZWRhZThiNmQ0YWNjZWE0MTlhZDQ5MGQwYTBkMDM5MGNhNDIwNjJlY2UiLCJzaGFyaW5naWQiOiJQRTRlZXA1SVEwNjBYNlZLNUlTOEdnIiwidHQiOiIwIiwidXNlUGVyc2lzdGVudENvb2tpZSI6IjIifQ.bTU2ZllBTEJJbFRxVFFjbWgvL09laHlIemJVQ01IRmZ6blI2ZW42R0k2dz0&encodeFailures=1&width=1920&height=940&srcWidth=&srcHeight=",
    },
    {
      id: 3,
      name: "hbo",
      src: "https://westeurope1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fmogtech-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!9NVpun5cBUSTgB1u6Ql5nbONXiefSdNLqmlp4_iXz-TjnyIBfOcsTYD7McCuw6cp%2Fitems%2F014OKNYI7PWZNKBSMQOBGI3PSSEALKF7TG%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbW9ndGVjaC1teS5zaGFyZXBvaW50LmNvbUAzZDQ0OThiYi05MGJkLTQ5ZjktYjIzYi0yNTYzNTFhOGJmNGEiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNjIxNTk4NDAwIiwiZXhwIjoiMTYyMTYyMDAwMCIsImVuZHBvaW50dXJsIjoieWJsT1BTUGpkWkVoR0ZxeERZMVFWTDJYRTlCSDAvVjBtRVYxOHpYQTJwQT0iLCJlbmRwb2ludHVybExlbmd0aCI6IjExNyIsImlzbG9vcGJhY2siOiJUcnVlIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlltRTJPV1ExWmpRdE5XTTNaUzAwTkRBMUxUa3pPREF0TVdRMlpXVTVNRGszT1RsayIsIm5hbWVpZCI6IjAjLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2Fhbm9uI2Y1MjE3ZDg2YmUyYTZiNDRhYjc2MTU0ZWRhZThiNmQ0YWNjZWE0MTlhZDQ5MGQwYTBkMDM5MGNhNDIwNjJlY2UiLCJuaWkiOiJtaWNyb3NvZnQuc2hhcmVwb2ludCIsImlzdXNlciI6InRydWUiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2Fhbm9uI2Y1MjE3ZDg2YmUyYTZiNDRhYjc2MTU0ZWRhZThiNmQ0YWNjZWE0MTlhZDQ5MGQwYTBkMDM5MGNhNDIwNjJlY2UiLCJzaGFyaW5naWQiOiJQRTRlZXA1SVEwNjBYNlZLNUlTOEdnIiwidHQiOiIwIiwidXNlUGVyc2lzdGVudENvb2tpZSI6IjIifQ.bTU2ZllBTEJJbFRxVFFjbWgvL09laHlIemJVQ01IRmZ6blI2ZW42R0k2dz0&encodeFailures=1&width=1920&height=940&srcWidth=&srcHeight=",
    },
    {
      id: 4,
      name: "nbc",
      src: "https://westeurope1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fmogtech-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!9NVpun5cBUSTgB1u6Ql5nbONXiefSdNLqmlp4_iXz-TjnyIBfOcsTYD7McCuw6cp%2Fitems%2F014OKNYI3E3JZGBVSPJVFYOVIBM74CQR7V%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbW9ndGVjaC1teS5zaGFyZXBvaW50LmNvbUAzZDQ0OThiYi05MGJkLTQ5ZjktYjIzYi0yNTYzNTFhOGJmNGEiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNjIxNTk4NDAwIiwiZXhwIjoiMTYyMTYyMDAwMCIsImVuZHBvaW50dXJsIjoieWJsT1BTUGpkWkVoR0ZxeERZMVFWTDJYRTlCSDAvVjBtRVYxOHpYQTJwQT0iLCJlbmRwb2ludHVybExlbmd0aCI6IjExNyIsImlzbG9vcGJhY2siOiJUcnVlIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlltRTJPV1ExWmpRdE5XTTNaUzAwTkRBMUxUa3pPREF0TVdRMlpXVTVNRGszT1RsayIsIm5hbWVpZCI6IjAjLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2Fhbm9uI2Y1MjE3ZDg2YmUyYTZiNDRhYjc2MTU0ZWRhZThiNmQ0YWNjZWE0MTlhZDQ5MGQwYTBkMDM5MGNhNDIwNjJlY2UiLCJuaWkiOiJtaWNyb3NvZnQuc2hhcmVwb2ludCIsImlzdXNlciI6InRydWUiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2Fhbm9uI2Y1MjE3ZDg2YmUyYTZiNDRhYjc2MTU0ZWRhZThiNmQ0YWNjZWE0MTlhZDQ5MGQwYTBkMDM5MGNhNDIwNjJlY2UiLCJzaGFyaW5naWQiOiJQRTRlZXA1SVEwNjBYNlZLNUlTOEdnIiwidHQiOiIwIiwidXNlUGVyc2lzdGVudENvb2tpZSI6IjIifQ.bTU2ZllBTEJJbFRxVFFjbWgvL09laHlIemJVQ01IRmZ6blI2ZW42R0k2dz0&encodeFailures=1&width=1920&height=940&srcWidth=&srcHeight=",
    },
    {
      id: 5,
      name: "fox-international",
      src: "https://westeurope1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fmogtech-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!9NVpun5cBUSTgB1u6Ql5nbONXiefSdNLqmlp4_iXz-TjnyIBfOcsTYD7McCuw6cp%2Fitems%2F014OKNYI7AOWCYOESJWBAZFERGPGW6VCS3%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbW9ndGVjaC1teS5zaGFyZXBvaW50LmNvbUAzZDQ0OThiYi05MGJkLTQ5ZjktYjIzYi0yNTYzNTFhOGJmNGEiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNjIxNTk4NDAwIiwiZXhwIjoiMTYyMTYyMDAwMCIsImVuZHBvaW50dXJsIjoieWJsT1BTUGpkWkVoR0ZxeERZMVFWTDJYRTlCSDAvVjBtRVYxOHpYQTJwQT0iLCJlbmRwb2ludHVybExlbmd0aCI6IjExNyIsImlzbG9vcGJhY2siOiJUcnVlIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlltRTJPV1ExWmpRdE5XTTNaUzAwTkRBMUxUa3pPREF0TVdRMlpXVTVNRGszT1RsayIsIm5hbWVpZCI6IjAjLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2Fhbm9uI2Y1MjE3ZDg2YmUyYTZiNDRhYjc2MTU0ZWRhZThiNmQ0YWNjZWE0MTlhZDQ5MGQwYTBkMDM5MGNhNDIwNjJlY2UiLCJuaWkiOiJtaWNyb3NvZnQuc2hhcmVwb2ludCIsImlzdXNlciI6InRydWUiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2Fhbm9uI2Y1MjE3ZDg2YmUyYTZiNDRhYjc2MTU0ZWRhZThiNmQ0YWNjZWE0MTlhZDQ5MGQwYTBkMDM5MGNhNDIwNjJlY2UiLCJzaGFyaW5naWQiOiJQRTRlZXA1SVEwNjBYNlZLNUlTOEdnIiwidHQiOiIwIiwidXNlUGVyc2lzdGVudENvb2tpZSI6IjIifQ.bTU2ZllBTEJJbFRxVFFjbWgvL09laHlIemJVQ01IRmZ6blI2ZW42R0k2dz0&encodeFailures=1&width=1920&height=940&srcWidth=&srcHeight=",
    },
    {
      id: 6,
      name: "warner-bros",
      src: "https://westeurope1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fmogtech-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!9NVpun5cBUSTgB1u6Ql5nbONXiefSdNLqmlp4_iXz-TjnyIBfOcsTYD7McCuw6cp%2Fitems%2F014OKNYI2KO7MSK5LLZBAYIQE6O7XDZ55L%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbW9ndGVjaC1teS5zaGFyZXBvaW50LmNvbUAzZDQ0OThiYi05MGJkLTQ5ZjktYjIzYi0yNTYzNTFhOGJmNGEiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNjIxNTk4NDAwIiwiZXhwIjoiMTYyMTYyMDAwMCIsImVuZHBvaW50dXJsIjoieWJsT1BTUGpkWkVoR0ZxeERZMVFWTDJYRTlCSDAvVjBtRVYxOHpYQTJwQT0iLCJlbmRwb2ludHVybExlbmd0aCI6IjExNyIsImlzbG9vcGJhY2siOiJUcnVlIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlltRTJPV1ExWmpRdE5XTTNaUzAwTkRBMUxUa3pPREF0TVdRMlpXVTVNRGszT1RsayIsIm5hbWVpZCI6IjAjLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2Fhbm9uI2Y1MjE3ZDg2YmUyYTZiNDRhYjc2MTU0ZWRhZThiNmQ0YWNjZWE0MTlhZDQ5MGQwYTBkMDM5MGNhNDIwNjJlY2UiLCJuaWkiOiJtaWNyb3NvZnQuc2hhcmVwb2ludCIsImlzdXNlciI6InRydWUiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2Fhbm9uI2Y1MjE3ZDg2YmUyYTZiNDRhYjc2MTU0ZWRhZThiNmQ0YWNjZWE0MTlhZDQ5MGQwYTBkMDM5MGNhNDIwNjJlY2UiLCJzaGFyaW5naWQiOiJQRTRlZXA1SVEwNjBYNlZLNUlTOEdnIiwidHQiOiIwIiwidXNlUGVyc2lzdGVudENvb2tpZSI6IjIifQ.bTU2ZllBTEJJbFRxVFFjbWgvL09laHlIemJVQ01IRmZ6blI2ZW42R0k2dz0&encodeFailures=1&width=1920&height=940&srcWidth=&srcHeight=",
    },
    {
      id: 7,
      name: "zdf",
      src: "https://westeurope1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fmogtech-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!9NVpun5cBUSTgB1u6Ql5nbONXiefSdNLqmlp4_iXz-TjnyIBfOcsTYD7McCuw6cp%2Fitems%2F014OKNYI2IUB5K3ZFWHRHK7DVRR6RNOCXH%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbW9ndGVjaC1teS5zaGFyZXBvaW50LmNvbUAzZDQ0OThiYi05MGJkLTQ5ZjktYjIzYi0yNTYzNTFhOGJmNGEiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNjIxNTk4NDAwIiwiZXhwIjoiMTYyMTYyMDAwMCIsImVuZHBvaW50dXJsIjoieWJsT1BTUGpkWkVoR0ZxeERZMVFWTDJYRTlCSDAvVjBtRVYxOHpYQTJwQT0iLCJlbmRwb2ludHVybExlbmd0aCI6IjExNyIsImlzbG9vcGJhY2siOiJUcnVlIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6IlltRTJPV1ExWmpRdE5XTTNaUzAwTkRBMUxUa3pPREF0TVdRMlpXVTVNRGszT1RsayIsIm5hbWVpZCI6IjAjLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2Fhbm9uI2Y1MjE3ZDg2YmUyYTZiNDRhYjc2MTU0ZWRhZThiNmQ0YWNjZWE0MTlhZDQ5MGQwYTBkMDM5MGNhNDIwNjJlY2UiLCJuaWkiOiJtaWNyb3NvZnQuc2hhcmVwb2ludCIsImlzdXNlciI6InRydWUiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHx1cm4lM2FzcG8lM2Fhbm9uI2Y1MjE3ZDg2YmUyYTZiNDRhYjc2MTU0ZWRhZThiNmQ0YWNjZWE0MTlhZDQ5MGQwYTBkMDM5MGNhNDIwNjJlY2UiLCJzaGFyaW5naWQiOiJQRTRlZXA1SVEwNjBYNlZLNUlTOEdnIiwidHQiOiIwIiwidXNlUGVyc2lzdGVudENvb2tpZSI6IjIifQ.bTU2ZllBTEJJbFRxVFFjbWgvL09laHlIemJVQ01IRmZ6blI2ZW42R0k2dz0&encodeFailures=1&width=1920&height=940&srcWidth=&srcHeight=",
    },
  ];

  return (
    <div className={styles.homeContainer}>
      <main className={styles.header}>
        <h1 className={styles.title}>
          Transforming the way Content is{" "}
          <span className={styles.gradientText}>Created</span> in the Cloud
        </h1>
        <p className={styles.description}>
          From Unified Media Workflows to Virtualization, Cloud Services, OTT
          Platforms, and more.
        </p>
        <Button size={"large"} className={styles.button}>
          Find out How
        </Button>

        <div className={styles.subtitle}>
          <h3>Join 3,000+ businesses growing with us</h3>
          {/* <div
            style={{
              display: 'inline-flex',
              width: '100%',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            {logos.map((logo) => (
              <div
                style={{
                  maxHeight: '45px',
                  maxWidth: '65px',
                  objectFit: 'contain',
                }}
              >
                <Image preview={false} src={logo.src} />
              </div>
            ))}
          </div> */}
        </div>
      </main>


      <section className={styles.insights}>
        <div
          className='insightsWrapper'
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '80%',
            margin: 'auto',
          }}
        >
          <div className={styles.insightsHeader}>
            <h4>What's New?</h4>
            <h2>MOG Insights</h2>
            <p>
              Stay up to date with our latests news, articles and resources.
            </p>
          </div>
          <div className={styles.insightsCarousel}>
            <Row gutter={[16]}>
              <Col span={12}>
                <CardHighlight
                  image={
                    'https://images.unsplash.com/photo-1532456164788-984c62717cf8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
                  }
                  title='Scripted TV Productions can Afford no Downtime'
                  labelText='White Paper'
                />
              </Col>
              <Col
                span={12}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <CardHorizontal
                  image={
                    'https://images.unsplash.com/photo-1594394489098-74ac04c0fc2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                  }
                />
                <CardHorizontal
                  image={
                    'https://images.unsplash.com/photo-1594394489098-74ac04c0fc2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                  }
                />
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <section className={styles.customerStories}>
        <h4>Customer Stories</h4>
        <h2>Check out our latest projects</h2>
        {/* <Button /> */}
        <HomeCarousel />
      </section> 

      {/* PRODUCTS */}
      <div className={styles.productsContainer}>
        <div className={styles.productsWrapper}>
          <div className={styles.productsHeader}>
            <h5>Products</h5>
            <h2>Shaping the Future of Media & Entertainment</h2>
            <p>
              Hi, we’re worldwide provider of digital media technology. Our
              innovative solutions enable the digital transformation across any
              industry that needs to create, manage, and distribute amazing
              content, while engaging with communities of any size.
            </p>
          </div>
          <div className={styles.productsTabs}>
            <Filter />
          </div>
          <div className={styles.productsButton}>
            <Btn border="#006AFF" color="#006AFF" btnIconColor="#006AFF">
              Explore all our products
            </Btn>
          </div>
        </div>
      </div>

      {/* INSIGHTS */}
      <section className={styles.insights}>
        <div className={styles.insightsHeader}>
          <h5>What's New?</h5>
          <h2>MOG Insights</h2>
          <p>Stay up to date with our latests news, articles and resources.</p>
        </div>
        <Row gutter={[16, 16]}>
          <Col>
            <CardHighlight
              image={
                "https://images.unsplash.com/photo-1532456164788-984c62717cf8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              }
              title="Scripted TV Productions can Afford no Downtime"
              labelText="White Paper"
            />
          </Col>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardHorizontal
              image={
                "https://images.unsplash.com/photo-1594394489098-74ac04c0fc2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              }
            />
            <CardHorizontal
              image={
                "https://images.unsplash.com/photo-1594394489098-74ac04c0fc2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              }
            />
          </Col>
        </Row>
      </section>

      {/* SOLUTIONS */}
      <div className={styles.solutionsContainer}>
        <Row gutter={[16, 16]} className={styles.solutionsWrapper}>
          <Col span={12}>
            <div className={styles.solutionsHeader}>
              <h5>Solutions</h5>
              <h2>
                Enabling the digital transformation across multiple industries
              </h2>
              <p>
                We empower broadcasters, telecoms, ISPs, content creators,
                publishers and developers of all backgrounds to solve their most
                pressing media challenges.
              </p>
            </div>
            <div>
              <Btn border="#fff" color="#fff" btnIconColor="#fff">
                Explore all our Solutions
              </Btn>
            </div>
          </Col>
          <Col span={12} className={styles.solutionsCards}>
            <Col style={{marginTop: "-30px"}}>
              <CardItemDark
                icon={
                  <Cloud
                    iconColor={"#2F75EC"}
                    className={styles.iconHover}
                  ></Cloud>
                }
                title="Cloud Remote Production"
                description="Manage and execute all your media operations in a virtualized ecosystem, ideal for Remote Production and Collaboration."
              ></CardItemDark>

              <CardItemDark
                icon={
                  <Cloud
                    iconColor={"#2F75EC"}
                    className={styles.iconHover}
                  ></Cloud>
                }
                title="Cloud Remote Production"
                description="Manage and execute all your media operations in a virtualized ecosystem, ideal for Remote Production and Collaboration."
              ></CardItemDark>
            </Col>

            <Col>
              <CardItemDark
                icon={
                  <Cloud
                    iconColor={"#2F75EC"}
                    className={styles.iconHover}
                  ></Cloud>
                }
                title="Cloud Remote Production"
                description="Manage and execute all your media operations in a virtualized ecosystem, ideal for Remote Production and Collaboration."
              ></CardItemDark>

              <CardItemDark
                icon={
                  <Cloud
                    iconColor={"#2F75EC"}
                    className={styles.iconHover}
                  ></Cloud>
                }
                title="Cloud Remote Production"
                description="Manage and execute all your media operations in a virtualized ecosystem, ideal for Remote Production and Collaboration."
              ></CardItemDark>
            </Col>
          </Col>
        </Row>
      </div>

      {/* CUSTOMER STORIES */}
      <section
        className={styles.customerStories}
        style={{backgroundColor: "#333"}}
      >
        <Carousel arrow style={{width: "95vw"}}>
          <div>
            <CardHighlight
              image={
                "https://images.unsplash.com/photo-1594394489098-74ac04c0fc2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              }
            />
          </div>
          <div>
            <CardHighlight
              image={
                "https://images.unsplash.com/photo-1594394489098-74ac04c0fc2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              }
            />
          </div>
          <div>
            <CardHighlight
              image={
                "https://images.unsplash.com/photo-1594394489098-74ac04c0fc2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              }
            />
          </div>
          <div>
            <CardHighlight
              image={
                "https://images.unsplash.com/photo-1594394489098-74ac04c0fc2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              }
            />
          </div>
        </Carousel>
      </section>

      {/* GET IN TOUCH */}
      <div className={styles.contactContainer}>
        <h2>Let's build something amazing together</h2>
        <Button className={styles.contactButton}>Get in Touch</Button>
      </div>
    </div>
  );
}
