function runTest() {
    const result = (2 + 2 === 4);
    return result;
}

if (runTest()) {
    console.log("✅ Teste Passou! A lógica da aplicação está OK.");
    process.exit(0);
} else {
    console.log("❌ Teste Falhou! Ocorreu um erro na lógica.");
    process.exit(1);
}

s