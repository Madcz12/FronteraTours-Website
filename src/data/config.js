/**
 * ============================================================
 * FronteraTours — Business Configuration
 * ============================================================
 * All editable business data is centralized here.
 * The operator can update prices, phone numbers, and
 * other details without modifying any UI code.
 * ============================================================
 */

export const BUSINESS = {
  name: 'FronteraTours',
  slogan: 'Somos más que un transporte ejecutivo',
  whatsapp: '+584121013148',
  phone: '+584121013148',
  email: 'info@fronteratours.com',
  instagram: '#',
  facebook: '#',
  tiktok: '#',
  hours: '6:00 AM – 10:00 PM',
  daysOpen: 'Lunes a Domingo',
  paymentDetails: {
    zelle: { email: 'XXXXXXXX@gmail.com', holder: 'XXXX XXXX' },
    pagoMovil: { phone: '+58412XXXXXXX', id: 'V-XXXXXXXX', bank: 'Banco XXXX' },
    brl: { pix: 'XXXXXXXX', holder: 'XXXX XXXX' }
  }
};

export const ROUTE = {
  origin: 'Puerto Ordaz',
  destination: 'Santa Elena de Uairén / Pacaraima',
  estimatedTime: '8–10 horas',
  stops: [
    { name: 'Puerto Ordaz', km: 0 },
    { name: 'El Dorado', km: 220 },
    { name: 'Km 88', km: 350 },
    { name: 'Luepa', km: 490 },
    { name: 'Santa Elena de Uairén', km: 600 },
    { name: 'Pacaraima (Brasil)', km: 615 },
  ],
};

export const PACKAGES = [
  {
    id: 'solo',
    passengers: '1 persona',
    price: 'XX',
    currency: 'USD',
    luggage: '1 maleta + 1 bolso',
    wifi: true,
    ac: true,
    recommended: false,
  },
  {
    id: 'duo',
    passengers: '2 personas',
    price: 'XX',
    currency: 'USD',
    luggage: '2 maletas + 2 bolsos',
    wifi: true,
    ac: true,
    recommended: true, // "Más popular"
  },
  {
    id: 'grupo',
    passengers: '3–5 personas',
    price: 'XX',
    currency: 'USD',
    luggage: 'Según disponibilidad',
    wifi: true,
    ac: true,
    recommended: false,
  },
];

export const VEHICLE = {
  name: 'Hyundai Tucson',
  year: 2008,
  capacity: '5 pasajeros',
  features: ['WiFi a bordo', 'Aire acondicionado', 'Espacio para equipaje', 'Asientos cómodos'],
};

export const PAYMENT_METHODS = ['Zelle', 'Pago Móvil', 'Efectivo (USD)', 'Transferencia BRL'];

export const TRUST_BADGES = {
  yearsOperating: '+12',
  tripsDone: '+500',
  rating: '4.9',
  ratingCount: '200',
};
