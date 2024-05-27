-- CreateTable
CREATE TABLE "Produtos" (
    "codigo" SERIAL NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "descricao" TEXT NOT NULL,
    "marca" VARCHAR(25) NOT NULL,
    "categoria" VARCHAR(25) NOT NULL,
    "preco" MONEY NOT NULL,

    CONSTRAINT "Produtos_pkey" PRIMARY KEY ("codigo")
);

-- CreateIndex
CREATE UNIQUE INDEX "Produtos_nome_key" ON "Produtos"("nome");
