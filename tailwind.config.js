export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { 
    extend: {
      colors: {
        // Paleta oficial de Life is Strange 2
        'lis2': {
          'burgundy': '#84474b',    // Vinho suave
          'teal': '#36bbd9',        // Azul turquesa
          'olive': '#6e6621',       // Verde-oliva
          'rust': '#cf6120',        // Laranja queimado (COR PRINCIPAL)
          'peach': '#ffbc6d',       // Pêssego claro
        },
        // Substituir amber por rust (laranja queimado)
        'amber': {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#cf6120',  // COR PRINCIPAL
          600: '#b85419',
          700: '#9a4515',
          800: '#7c3711',
          900: '#5e2a0d',
        }
      }
    } 
  },
  plugins: [],
}
