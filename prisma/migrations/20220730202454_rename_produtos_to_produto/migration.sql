/*
  Warnings:

  - You are about to drop the `Produtos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Produtos";

-- CreateTable
CREATE TABLE "Produto" (
    "codigo" SERIAL NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "descricao" TEXT NOT NULL,
    "marca" VARCHAR(25) NOT NULL,
    "categoria" VARCHAR(25) NOT NULL,
    "preco" MONEY NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("codigo")
);

-- CreateIndex
CREATE UNIQUE INDEX "Produto_nome_key" ON "Produto"("nome");
