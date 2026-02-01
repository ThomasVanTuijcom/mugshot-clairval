import type { Comment } from "@/types/comment";

export const comments: Comment[] = [
	{
		id: "c1",
		postId: "p8",
		authorId: "lea.gabriel",
		content: "Créer le moment, c’est aussi savoir s’arrêter parfois.",
		createdAt: "2026-01-30T10:05:00Z",
		stats: { likes: 12 },
	},
	{
		id: "c2",
		postId: "p8",
		authorId: "amanda.belami",
		content: "La confiance, oui. L’arrogance, non.",
		createdAt: "2026-01-30T10:12:00Z",
		stats: { likes: 8 },
	},
	{
		id: "c3",
		postId: "p8",
		authorId: "steph.maurice",
		content: "Belle photo en tout cas, la lumière est incroyable.",
		createdAt: "2026-01-30T10:20:00Z",
		stats: { likes: 15 },
	},

	{
		id: "c4",
		postId: "p7",
		authorId: "olivia.twift",
		content: "Ton agenda a l’air épuisant… prends soin de toi quand même.",
		createdAt: "2026-01-30T11:00:00Z",
		stats: { likes: 6 },
	},
	{
		id: "c5",
		postId: "p7",
		authorId: "amanda.belami",
		content: "Tout le monde n’a pas besoin de vivre à ce rythme.",
		createdAt: "2026-01-30T11:08:00Z",
		stats: { likes: 9 },
	},

	{
		id: "c6",
		postId: "p6",
		authorId: "steph.maurice",
		content: "Le silence est souvent le meilleur allié de la créativité.",
		createdAt: "2026-01-30T09:40:00Z",
		stats: { likes: 21 },
	},
	{
		id: "c7",
		postId: "p6",
		authorId: "lea.gabriel",
		content: "Loin du bruit, les décisions sont plus claires.",
		createdAt: "2026-01-30T09:55:00Z",
		stats: { likes: 14 },
	},

	{
		id: "c8",
		postId: "p5",
		authorId: "olivia.twift",
		content: "La vue doit être incroyable à cette hauteur.",
		createdAt: "2026-01-30T09:25:00Z",
		stats: { likes: 18 },
	},
	{
		id: "c9",
		postId: "p5",
		authorId: "amanda.belami",
		content:
			"Pendant que certains prennent de la hauteur, d’autres restent au sol.",
		createdAt: "2026-01-30T09:32:00Z",
		stats: { likes: 11 },
	},

	{
		id: "c10",
		postId: "p4",
		authorId: "steph.maurice",
		content: "Un café bien serré, sans hésitation.",
		createdAt: "2026-01-30T09:18:00Z",
		stats: { likes: 5 },
	},
	{
		id: "c11",
		postId: "p4",
		authorId: "baptiste.versille",
		content: "Eau plate. La discipline commence par les choix simples.",
		createdAt: "2026-01-30T09:22:00Z",
		stats: { likes: 7 },
	},

	{
		id: "c12",
		postId: "p1",
		authorId: "amanda.belami",
		content: "Un immense travail d’équipe, très fière du résultat.",
		createdAt: "2026-01-30T09:30:00Z",
		stats: { likes: 22 },
	},
	{
		id: "c13",
		postId: "p1",
		authorId: "lea.gabriel",
		content: "Un cadre sain aide beaucoup les enfants à s’épanouir.",
		createdAt: "2026-01-30T09:35:00Z",
		stats: { likes: 10 },
	},
];
