import { PrismaClient } from "@prisma/client";
import { normalizeName } from "../src/utils/normalizeName";
import { generateInvitationCode } from "../src/utils/generateCode";

const prisma = new PrismaClient();

async function main() {
  console.log("Limpando dados anteriores...");
  await prisma.rSVP.deleteMany();
  await prisma.guest.deleteMany();
  await prisma.groupMember.deleteMany();
  await prisma.guestGroup.deleteMany();

  console.log("Criando grupos e convidados de demonstração (dados fictícios)...");

  const familiaOliveira = await prisma.guestGroup.create({
    data: {
      name: "Família Oliveira",
      maximumGuests: 4,
      allowsCompanion: true,
      members: {
        create: [
          { name: "Roberto Oliveira", ageCategory: "ADULT" },
          { name: "Fernanda Oliveira", ageCategory: "ADULT" },
          { name: "Lucas Oliveira", ageCategory: "CHILD" },
        ],
      },
    },
  });

  const amigosEscola = await prisma.guestGroup.create({
    data: {
      name: "Amigos da Escola",
      maximumGuests: 2,
      allowsCompanion: true,
      members: { create: [{ name: "Convidado Adicional", ageCategory: "ADULT" }] },
    },
  });

  const individuais = await prisma.guestGroup.create({
    data: { name: "Convidados Individuais", maximumGuests: 1, allowsCompanion: false },
  });

  const demoGuests = [
    { name: "Ana Beatriz Souza", groupId: individuais.id },
    { name: "Carlos Eduardo Lima", groupId: individuais.id },
    { name: "Mariana Alves", groupId: amigosEscola.id },
    { name: "João Pedro Santos", groupId: individuais.id },
    { name: "Roberto Oliveira", groupId: familiaOliveira.id },
  ];

  for (const g of demoGuests) {
    await prisma.guest.create({
      data: {
        name: g.name,
        normalizedName: normalizeName(g.name),
        invitationCode: generateInvitationCode("TAIRINE"),
        groupId: g.groupId,
        isActive: true,
      },
    });
  }

  console.log("Seed concluído com sucesso.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
