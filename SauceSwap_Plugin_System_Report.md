# SauceSwap Plugin System for Hedera Agents

## Índice

1. [Introducción](#introducción)
2. [Arquitectura General](#arquitectura-general)
3. [Componentes Principales](#componentes-principales)
4. [Funcionalidades Detalladas](#funcionalidades-detalladas)
5. [Integración con Hedera](#integración-con-hedera)
6. [Casos de Uso](#casos-de-uso)
7. [Ejemplos de Implementación](#ejemplos-de-implementación)
8. [Conclusiones](#conclusiones)

## Introducción

El sistema de plugins de SauceSwap es una extensión para agentes de inteligencia artificial que permite interactuar con el exchange descentralizado (DEX) SauceSwap en la red Hedera. Esta integración permite a los agentes obtener información en tiempo real sobre pools de liquidez, tokens, precios históricos y generar visualizaciones avanzadas de datos financieros.

SauceSwap es un DEX (Intercambio Descentralizado) que opera en la red Hedera, permitiendo el intercambio de tokens, provisión de liquidez y otras operaciones DeFi. El sistema de plugins facilita que los agentes de IA puedan acceder a estos datos y funcionalidades de forma estructurada y eficiente.

## Arquitectura General

El sistema de plugins de SauceSwap sigue una arquitectura modular que se integra con el framework Standards Agent Kit. La arquitectura se compone de:

```
┌─────────────────────────────────────────────────────────────────┐
│                      SauceSwap Plugin System                    │
├───────────────┬─────────────────┬──────────────┬────────────────┤
│ Pool List     │ Pool Details    │ Token Details│ Associated     │
│ Plugin        │ Plugin          │ Plugin       │ Pools Plugin   │
├───────────────┴─────────────────┴──────────────┴────────────────┤
│                                                                 │
│                     Candlestick Chart Plugin                    │
│                                                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────┐  │
│  │ Chart       │  │ Data        │  │ Hedera Integration      │  │
│  │ Generation  │  │ Retrieval   │  │ ┌─────────────────────┐ │  │
│  │ ┌─────────┐ │  │ ┌─────────┐ │  │ │ HCS-3 Inscription   │ │  │
│  │ │ Canvas  │ │  │ │ API     │ │  │ │ Image Upload        │ │  │
│  │ │ Renderer│ │  │ │ Client  │ │  │ │ HRL Generation      │ │  │
│  │ └─────────┘ │  │ └─────────┘ │  │ └─────────────────────┘ │  │
│  └─────────────┘  └─────────────┘  └─────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### Principios de Diseño

1. **Modularidad**: Cada funcionalidad está encapsulada en su propio módulo.
2. **Extensibilidad**: Facilidad para añadir nuevas características sin modificar el código existente.
3. **Interoperabilidad**: Integración con el estándar HCS-10 para comunicación entre agentes.
4. **Usabilidad**: API intuitiva y documentada para los agentes de IA.

## Componentes Principales

El sistema de plugins de SauceSwap consta de los siguientes componentes principales:

### 1. Plugin Principal (SauceSwapPlugin)

Actúa como un contenedor que agrupa todas las herramientas relacionadas con SauceSwap:

```typescript
export default class SauceSwapPlugin extends BasePlugin {
  id = 'sauceswap';
  name = 'SauceSwap Plugin';
  description = 'Provides tools to interact with SauceSwap DEX on Hedera (defaults to mainnet)';
  version = '1.0.0';
  author = 'Standards Agent Kit';
  
  private network: 'mainnet' | 'testnet' = 'mainnet';
  private chartOutputDir: string = './charts';
  private chartTool: GetSauceSwapChartTool | null = null;
  
  // Inicialización y exposición de herramientas
  // ...
}
```

El plugin principal se encarga de:
- Inicializar todos los componentes subyacentes
- Configurar la red (mainnet/testnet)
- Gestionar la integración con el cliente HCS-10
- Proveer acceso a todas las herramientas disponibles

### 2. Herramientas de Consulta de Pools

#### GetSauceSwapPoolsTool

Permite obtener información paginada sobre los pools disponibles en SauceSwap:

- **Funcionalidad**: Consulta todos los pools disponibles con soporte para paginación (10 pools por página)
- **Parámetros**: 
  - `network`: Red a consultar (mainnet/testnet)
  - `page`: Número de página para la paginación
- **Formato de respuesta**: Tabla con ID, par de tokens, precios y otros datos esenciales

#### GetSauceSwapPoolDetailsTool

Proporciona información detallada sobre un pool específico:

- **Funcionalidad**: Obtiene datos completos de un pool específico por ID
- **Parámetros**:
  - `network`: Red a consultar
  - `poolId`: ID del pool a consultar
- **Formato de respuesta**: JSON estructurado con información detallada del pool, incluyendo reservas, tokens, y precios

### 3. Herramientas de Consulta de Tokens

#### GetSauceSwapTokenDetailsTool

Permite obtener información detallada sobre tokens específicos:

- **Funcionalidad**: Consulta información completa sobre un token
- **Parámetros**:
  - `network`: Red a consultar
  - `tokenId`: ID del token a consultar
- **Formato de respuesta**: Datos completos del token incluyendo precio, página web, descripción y métricas

#### GetSauceSwapAssociatedPoolsTool

Encuentra todos los pools que contienen un token específico:

- **Funcionalidad**: Búsqueda de pools asociados a un token particular
- **Parámetros**:
  - `network`: Red a consultar
  - `tokenId`: ID del token para buscar pools asociados
- **Respuesta**: Lista de pools donde el token especificado está presente

### 4. Plugin de Gráficos Candlestick

Este es el componente más sofisticado, permitiendo la generación de gráficos históricos de precios:

```typescript
export class GetSauceSwapChartTool extends StructuredTool {
  name = 'get_sauceswap_chart';
  description = 'Get historical price chart data for a SauceSwap pool with automatic interval selection';
  
  schema = z.object({
    poolId: z.number().describe('The ID of the pool to get chart data for'),
    timeRange: z.string().describe('Time range for the chart (e.g., "1h", "4h", "1d", "1w", "1d 6h", "2w 3d")'),
    inverted: z.boolean().optional().describe('Whether to invert the price calculation'),
    network: z.enum(['mainnet', 'testnet']).optional().describe('Network to use (mainnet or testnet)'),
    uploadToHedera: z.boolean().optional().describe('Whether to upload the chart to Hedera using inscribe (default: false)'),
    quality: z.number().optional().describe('Image quality for compression (1-100, default: 80)'),
    sendDirectlyInChat: z.boolean().optional().describe('If true, will send the image HRL directly in chat for rendering')
  });
  
  // Implementación...
}
```

El plugin de gráficos candlestick se compone de:

- **CandlestickFetcher**: Recupera datos históricos de la API de SauceSwap
- **ChartRenderer**: Genera gráficos visuales a partir de los datos
- **Integración Hedera**: Permite subir los gráficos a Hedera mediante inscripciones (HCS-3)

#### Características Destacadas:

- Generación de gráficos para diferentes períodos temporales (1h, 4h, 1d, 1w, etc.)
- Selección automática de intervalos apropiados según el rango temporal
- Compresión de imágenes con calidad ajustable
- Almacenamiento permanente en Hedera mediante inscripciones
- Posibilidad de enviar imágenes directamente al chat para visualización instantánea
- Soporte para inversión de precios (intercambio token A/B)

## Funcionalidades Detalladas

### Consulta de Pools

El plugin permite consultar los pools disponibles en SauceSwap con una interfaz paginada. Un ejemplo de respuesta formateada:

```
SauceSwap Pools (mainnet) - Page 1/5 (Total: 42)

ID | Pair | Token Prices | LP Price
---|------|-------------|--------
1 | HBAR-USDC | HBAR: $0.08, USDC: $1.00 | $24.37
2 | HBAR-SAUCE | HBAR: $0.08, SAUCE: $0.0145 | $0.89
3 | USDC-HSuite | USDC: $1.00, HSuite: $0.004 | $0.12
...
```

### Detalles de Pool

Proporciona información detallada sobre un pool específico:

```json
{
  "id": 5,
  "contractId": "0.0.1234567",
  "pair": "HBAR-USDC",
  "lpToken": {
    "symbol": "HBAR-USDC-LP",
    "priceUsd": 24.37,
    "totalReserve": "12345678"
  },
  "tokens": {
    "HBAR": {
      "id": "0.0.1234",
      "priceUsd": 0.08,
      "reserve": "123456789",
      "website": "https://hedera.com"
    },
    "USDC": {
      "id": "0.0.456789",
      "priceUsd": 1.0,
      "reserve": "9876543",
      "website": "https://www.circle.com/en/usdc"
    }
  }
}
```

### Generación de Gráficos

La funcionalidad más avanzada es la generación de gráficos candlestick que visualizan datos históricos de precios:

1. **Recuperación de datos**: Se obtienen datos históricos de la API de SauceSwap
2. **Procesamiento**: Se calculan velas (candlesticks) con apertura, cierre, máximo y mínimo
3. **Renderizado**: Se genera un gráfico PNG con indicadores visuales
4. **Almacenamiento**: El gráfico se guarda localmente y opcionalmente en Hedera

Un ejemplo de respuesta tras generar un gráfico:

```
Chart generated for Pool 5:

📊 Time Range: 1d
📈 Interval: 1h

Summary:
- Total Candles: 24
- Time Period: 2023-05-01 00:00 to 2023-05-01 23:00
- Highest Price: $0.085
- Lowest Price: $0.079
- Total Volume: $1,234,567
- Average Liquidity: $9,876,543

Chart saved to: ./charts/pool_5_1d_1683012345.png
Uploaded to Hedera: hcs://1/0.0.987654

Latest Candlestick:
- Open: $0.081
- High: $0.082
- Low: $0.080
- Close: $0.081
- Volume: $45,678
- Liquidity: $567,890
```

## Integración con Hedera

El sistema de plugins aprovecha varias capacidades de la red Hedera:

### HCS-10 (Hedera Consensus Service)

Utiliza HCS-10 para la comunicación entre agentes, permitiendo:
- Intercambio de mensajes encriptados
- Gestión de conexiones y estado
- Perfil y metadatos del agente

### Inscripciones HCS-3

Para almacenamiento permanente de gráficos y otros datos:
- Los gráficos se inscriben en la red Hedera como activos permanentes
- Se genera un HRL (Hedera Resource Locator) para acceso a los archivos
- Formato: `hcs://1/{topicId}`

### Tokens y Contratos

Interactúa con tokens y contratos de SauceSwap en Hedera:
- Obtención de información sobre tokens (HBAR, SAUCE, etc.)
- Consulta de datos de contratos de pools
- Soporte para redes mainnet y testnet

## Casos de Uso

El sistema de plugins de SauceSwap habilita diversos casos de uso para agentes de IA:

### 1. Asistentes de Trading

Agentes que pueden:
- Monitorear precios y liquidez
- Generar gráficos personalizados
- Analizar tendencias de precios
- Proporcionar información detallada sobre pares de trading

### 2. Informes de Mercado

Generación automatizada de:
- Resúmenes diarios/semanales de mercado
- Análisis de liquidez y volumen
- Reportes sobre tokens específicos
- Visualizaciones históricas comparativas

### 3. Alertas y Monitoreo

Sistema para:
- Notificar cambios significativos de precios
- Alertar sobre oportunidades de arbitraje
- Monitorear tokens específicos
- Identificar cambios importantes en reservas

### 4. Educación DeFi

Agentes educativos que:
- Explican conceptos DeFi utilizando datos reales
- Demuestran la mecánica de pools de liquidez
- Ilustran el impacto de eventos en precios
- Facilitan la comprensión de conceptos financieros

## Ejemplos de Implementación

### Ejemplo 1: Consulta de Pools Disponibles

```typescript
// Ejemplo de uso de la herramienta de consulta de pools
const result = await agentExecutor.call({
  input: "Muéstrame la lista de pools disponibles en SauceSwap"
});

// El agente utilizará internamente:
// const poolsList = await getSauceSwapPoolsTool._call({ network: 'mainnet', page: 1 });
```

### Ejemplo 2: Generación de Gráfico Histórico

```typescript
// Ejemplo de generación de gráfico con almacenamiento en Hedera
const result = await agentExecutor.call({
  input: "Genera un gráfico de precios para el par HBAR-USDC de los últimos 7 días y guárdalo en Hedera"
});

// El agente utilizará internamente:
// const chart = await getSauceSwapChartTool._call({
//   poolId: 1,
//   timeRange: '7d',
//   uploadToHedera: true,
//   quality: 80
// });
```

### Ejemplo 3: Análisis de Token

```typescript
// Ejemplo de consulta de información detallada de token
const result = await agentExecutor.call({
  input: "Dame información completa sobre el token SAUCE"
});

// El agente utilizará internamente:
// const tokenDetails = await getSauceSwapTokenDetailsTool._call({
//   network: 'mainnet',
//   tokenId: 'tokenIdDeSAUCE'
// });
```

## Conclusiones

El sistema de plugins de SauceSwap para agentes Hedera representa una integración avanzada entre inteligencia artificial y finanzas descentralizadas. Sus principales ventajas son:

### Fortalezas

1. **Arquitectura Modular**: Diseño flexible que permite extender funcionalidades
2. **Visualización Avanzada**: Capacidad de generar gráficos profesionales con múltiples opciones
3. **Integración Profunda**: Aprovechamiento de características nativas de Hedera
4. **Experiencia de Usuario**: Respuestas bien formateadas y fácilmente comprensibles
5. **Persistencia**: Almacenamiento permanente en la red Hedera

### Aplicaciones Prácticas

- **Asistencia Financiera**: Guía para inversores en el ecosistema Hedera
- **Análisis de Mercado**: Herramientas para profesionales y analistas
- **Educación DeFi**: Recursos visuales para comprender finanzas descentralizadas
- **Automatización**: Base para sistemas automatizados de trading y monitoreo

Esta integración demuestra el potencial de los agentes de IA especializados en DeFi, combinando datos financieros en tiempo real con capacidades avanzadas de procesamiento y comunicación a través de estándares abiertos como HCS-10. 