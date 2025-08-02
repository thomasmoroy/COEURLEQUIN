import { Page, BlogPost, ClubEvent, LicenseInfo, TimelineEvent, TrainingSlot, SiteSettings } from './types';

export const NAV_LINKS: Page[] = [
  Page.HOME,
  Page.BLOG,
  Page.HISTORY,
  Page.CALENDAR,
  Page.INFO,
  Page.CONTACT,
];

export const DEFAULT_SITE_SETTINGS: SiteSettings = {
    clubName: 'Coeurlequin',
    logoSvg: "data:image/jpeg;base64,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",
    logoHeight: 40,
    heroTitlePrefix: 'COEUR',
    heroTitleSuffix: 'LEQUIN',
    heroSubtitle: "Plus qu'un club, une famille.",
    contactEmail: 'basketclubcoeurlequin@gmail.com',
    contactImage1: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq5a4ue4WLXFt4YLjQhKwkqFtxx6HRHk7TXz1RoMQ4FDrej6vKKxcbPfqbJavPVJLf4ZT7hjm1h1IGVgyjGrjYVJAIUX1SQypWHwZooEajTPCGSfE02jlQSB-u0TkNk7MiaOEcVjQ=w400-h500-k-no',
    contactImage2: 'https://www.creney.fr/wp-content/uploads/2020/12/salle-des-sports-interieur-2-scaled.jpg',
    theme: {
      primaryColor: '#f97316',
      textColor: '#374151',
      headingColor: '#1f2937',
      fontFamily: 'Poppins',
      backgroundType: 'color',
      backgroundColor: '#f3f4f6',
      backgroundImage: '',
      backgroundSize: 'cover',
    }
};

export let DUMMY_BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Super Loto du BCC : Merci à Tous !',
    content: 'Quelle soirée incroyable ! Notre super loto a été un immense succès grâce à votre participation massive. Un grand merci aux joueurs, parents, bénévoles et sponsors qui ont rendu cet événement possible. Les fonds récoltés nous aideront à financer les équipements pour nos jeunes. On vous attend encore plus nombreux l\'année prochaine !',
    author: 'Le Bureau',
    date: '10 Mars 2024',
    imageUrl: 'https://images.unsplash.com/photo-1550505051-f35834e5a31a?w=800&q=80'
  },
  {
    id: 2,
    title: 'Nos U15F enchaînent avec une nouvelle victoire !',
    content: 'Bravo à notre équipe U15 Féminine qui a remporté une victoire cruciale ce week-end contre une équipe tenace. Un match plein de combativité et un superbe esprit d\'équipe. Le travail à l\'entraînement paie ! #GoBCC #BasketFeminin',
    author: 'Coach Sophie',
    date: '22 Avril 2024',
    imageUrl: 'https://images.unsplash.com/photo-1594434223635-43a05a415951?w=800&q=80'
  },
  {
    id: 3,
    title: 'Inscriptions 2024-2025 : Rejoignez la famille Coeurlequin !',
    content: 'La nouvelle saison approche à grands pas ! Les inscriptions pour 2024-2025 sont officiellement ouvertes. Que vous soyez débutant ou confirmé, enfant ou adulte, il y a une place pour vous au Basket Club Coeurlequin. Retrouvez toutes les infos dans la section \'Infos Pratiques\'.',
    author: 'Le Secrétariat',
    date: '10 Mai 2024',
    imageUrl: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&q=80'
  }
];

export let DUMMY_EVENTS: ClubEvent[] = [
    {
        id: 1,
        title: 'Match Senior Masculin vs. Saint-André-les-Vergers',
        date: '2024-06-01',
        time: '20:30',
        location: 'Gymnase de Creney',
        description: 'Dernier match à domicile de la saison ! Venez faire du bruit pour encourager nos seniors !',
        type: 'match',
    },
    {
        id: 2,
        title: 'Fête de fin de saison du club',
        date: '2024-06-22',
        time: '12:00 - 18:00',
        location: 'Gymnase de Creney',
        description: 'Journée festive avec barbecue, tournois amicaux et remise des récompenses. Ouvert à tous les licenciés et leurs familles.',
        type: 'event',
    },
    {
        id: 3,
        title: 'Stage de perfectionnement U11/U13',
        date: '2024-07-08',
        time: '09:00 - 17:00',
        location: 'Gymnase de Creney',
        description: 'Stage de basket pendant les vacances d\'été. Inscription obligatoire.',
        type: 'training',
    },
];

export let LICENSE_DATA: LicenseInfo[] = [
    {
        id: 1,
        category: 'Baby (U7)',
        price: '80€',
        description: 'Pour les enfants nés entre 2018 et 2019. Découverte ludique du basketball.'
    },
    {
        id: 2,
        category: 'Jeunes (U9 à U17)',
        price: '120€',
        description: 'Compétition et loisir pour les jeunes de 8 à 16 ans.'
    },
    {
        id: 3,
        category: 'Seniors & Loisirs',
        price: '150€',
        description: 'Pour les adultes, en compétition départementale ou en pratique loisir.'
    },
    {
        id: 4,
        category: 'Dirigeant / Volontaire',
        price: '30€',
        description: 'Assurance et soutien au club pour tous nos bénévoles.'
    }
];

export let DUMMY_TIMELINE_EVENTS: TimelineEvent[] = [
    {
        id: 1,
        year: "2022",
        title: "Création du Club",
        content: "Le Basket Club Coeurlequin voit le jour, fruit de la volonté de passionnés de faire vivre le basketball à Creney-près-Troyes. L'aventure commence avec une poignée de licenciés et beaucoup d'ambition.",
        imageUrl: "https://images.unsplash.com/photo-1546519638-68210949819b?w=500&q=80",
        reverse: false
    },
    {
        id: 2,
        year: "2023",
        title: "Première Saison Officielle",
        content: "Le club engage ses premières équipes en championnat FFBB. Des U7 aux Seniors, le BCC porte fièrement ses couleurs sur les parquets de l'Aube pour la première fois.",
        imageUrl: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=500&q=80",
        reverse: true
    },
    {
        id: 3,
        year: "2024",
        title: "Le Club Grandit",
        content: "Fort de son succès, le club dépasse la centaine de licenciés. De nouveaux créneaux sont ouverts et des événements comme le Super Loto animent la vie du club et renforcent les liens.",
        imageUrl: "https://images.unsplash.com/photo-1612871689353-cccf581d8ec4?w=500&q=80",
        reverse: false
    },
    {
        id: 4,
        year: "...",
        title: "Demain",
        content: "L'histoire ne fait que commencer ! Avec nos jeunes talents et le soutien de notre communauté, nous regardons vers l'avenir avec enthousiasme, prêts à écrire les prochains chapitres de l'aventure Coeurlequin.",
        imageUrl: "https://images.unsplash.com/photo-1561054363-a21b3a583a4b?w=500&q=80",
        reverse: true
    }
];

export let DUMMY_TRAINING_SCHEDULE: TrainingSlot[] = [
    { id: 1, category: 'U7 (Baby)', day: 'Samedi', time: '09:30 - 10:30' },
    { id: 2, category: 'U9 / U11', day: 'Mercredi', time: '17:00 - 18:15' },
    { id: 3, category: 'U13', day: 'Lundi', time: '17:30 - 19:00' },
    { id: 4, category: 'U15 F', day: 'Mercredi', time: '18:15 - 19:45' },
    { id: 5, category: 'U18 M', day: 'Lundi', time: '19:00 - 20:30' },
    { id: 6, category: 'Seniors F', day: 'Mardi & Vendredi', time: '20:30 - 22:00 & 19:00 - 20:30' },
    { id: 7, category: 'Seniors M', day: 'Mercredi & Vendredi', time: '19:45 - 21:15 & 20:30 - 22:00' },
    { id: 8, category: 'Loisirs', day: 'Mardi', time: '19:00 - 20:30' },
];