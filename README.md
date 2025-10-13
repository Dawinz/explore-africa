# Explore Africa - African Countries Explorer

A modern, interactive web application to explore all 54 African countries with detailed profiles, statistics, and cultural information. Powered by [The Heritage Exchange](https://theheritageexchange.com).

![African Countries Explorer](https://img.shields.io/badge/Countries-54-orange) ![React](https://img.shields.io/badge/React-19-blue) ![Vite](https://img.shields.io/badge/Vite-7-purple)

## 🌍 Features

- **54 African Countries**: Complete database of all African nations
- **Detailed Country Profiles**: Comprehensive information including:
  - Key facts (population, area, languages, currency)
  - Main highlights and features
  - Business & investment opportunities
  - Top cities and economic centers
  - Visa and business requirements
  - Geographic location and context
  - Photo gallery showcasing diversity
- **Advanced Search & Filtering**: Find countries by name or filter by region
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Smooth animations and interactive elements
- **Heritage Exchange Branding**: Integrated with The Heritage Exchange colors and mission

## 🚀 Technologies Used

- **React 19** - Modern UI library
- **Vite 7** - Next-generation frontend tooling
- **React Router v7** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Axios** - HTTP client
- **React Icons** - Icon library
- **REST Countries API** - Country data source

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Dawinz/explore-africa.git
cd explore-africa
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🛠️ Build & Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel

This project is configured for easy deployment to Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect the Vite configuration
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Dawinz/explore-africa)

## 📁 Project Structure

```
explore-africa/
├── public/              # Static assets
│   ├── images/         # Image assets
│   ├── favicon.svg     # Site favicon
│   └── ...
├── src/
│   ├── components/     # React components
│   │   ├── common/    # Shared components (Header, Footer)
│   │   ├── home/      # Homepage components
│   │   └── country/   # Country detail components
│   ├── hooks/         # Custom React hooks
│   ├── pages/         # Page components
│   ├── services/      # API services and utilities
│   ├── App.jsx        # Main app component
│   ├── main.jsx       # Entry point
│   └── index.css      # Global styles
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── vercel.json        # Vercel configuration
└── README.md
```

## 🎨 Color Scheme

The project uses The Heritage Exchange brand colors:

- **Primary Orange**: `#F28C38`
- **Secondary Green**: `#6B7F5E`
- **Accent Orange**: `#E67E22`

## 🌐 API

This project uses the [REST Countries API](https://restcountries.com/) to fetch real-time data about African countries.

## 📱 Features by Section

### Homepage
- Hero section with call-to-action
- About Africa information
- Statistics overview
- Search bar for countries
- Region filter (Northern, Eastern, Western, Southern, Central Africa)
- Country grid with cards

### Country Detail Page
- Hero section with country flag and name
- Key facts and statistics
- Main highlights
- Business & investment opportunities
- Top business cities
- Visa and business information
- Additional country details
- Location and regional context
- Photo gallery
- Call-to-action sections
- Related countries

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is part of The Heritage Exchange initiative.

## 🔗 Links

- [The Heritage Exchange Website](https://theheritageexchange.com)
- [Live Demo](https://explore-africa.vercel.app)
- [GitHub Repository](https://github.com/Dawinz/explore-africa)

## 👨‍💻 Developer

Built with ❤️ for The Heritage Exchange

---

**Discover Africa. Explore Opportunities. Connect with Heritage.**
