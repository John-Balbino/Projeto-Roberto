import { useState } from "react";
import imgCivil from "../img/area-civil.jpg";
import imgMedico from "../img/area-médica.jpg";
import imgTrabalhista from "../img/area-trabalhista.jpg";
import imgPrevidencia from "../img/area-previdencia.jpg";
import imgConstitucional from "../img/bets.jpg";

const noticias = [
  {
    id: 1,
    categoria: "Civil",
    data: "24 Set, 2026",
    titulo: "PENSÃO ALIMENTÍCIA: O QUE VOCÊ PRECISA SABER SOBRE ESSE DIREITO",
    resumo: "Entenda as principais disposições legais sobre pensão alimentícia.",
    conteudo: `A pensão alimentícia é um dos temas mais presentes no Direito de Família e, ao mesmo tempo, um dos que mais geram dúvidas. Quem precisa pedir, quem deve pagar e quem recebe costumam ter muitas perguntas. Neste artigo, explico de forma clara e acessível o que é a pensão, quem tem direito, como o valor é definido e o que acontece quando ela não é paga.

O que é pensão alimentícia?

A pensão alimentícia é uma obrigação legal que garante a uma pessoa os recursos necessários para a sua subsistência. O nome pode enganar: ela não se limita à alimentação. Abrange moradia, saúde, educação, vestuário e lazer. No jargão jurídico, dizemos que os alimentos visam assegurar a dignidade da pessoa humana, princípio previsto na Constituição Federal.

Quem tem direito a receber?

Em regra, os alimentos são devidos aos filhos menores, mas o direito vai além. Podem pedir pensão os filhos maiores que ainda estudam, o cônjuge ou companheiro que não tem condições de se manter, os pais idosos e, em situações específicas, até irmãos. O Código Civil prevê que os parentes podem exigir alimentos uns dos outros, na medida das necessidades de quem pede e das possibilidades de quem paga.

Como é calculado o valor da pensão?

Não existe tabela fixa. O juiz analisa o chamado binômio necessidade-possibilidade: de um lado, a necessidade de quem recebe; de outro, a capacidade financeira de quem paga. Na prática, é comum a fixação de um percentual sobre os rendimentos do alimentante, como 20% ou 30%, mas cada caso é analisado individualmente.

Como pedir a pensão?

O pedido é feito por meio de uma ação de alimentos. Em situações de urgência, é possível requerer alimentos provisionais ou tutela de urgência, para que a pensão comece a ser paga ainda durante o processo. Também é possível firmar um acordo extrajudicial, com o auxílio de um advogado, evitando o litígio.

O que acontece se a pensão não for paga?

O inadimplemento gera consequências sérias. O devedor pode ser executado, ter o nome protestado e, no caso de atraso de três parcelas, pode sofrer prisão civil, limitada a três meses. Os valores atrasados ainda são corrigidos monetariamente e acrescidos de juros.

Quando a pensão termina?

A obrigação alimentar cessa, em regra, quando o filho completa 18 anos. Se ele estiver cursando ensino superior ou técnico, a pensão pode se estender até a conclusão do curso, geralmente até os 24 anos. Também é possível pedir a exoneração quando as condições que justificavam o pagamento deixam de existir.

Posso pedir revisão do valor?

Sim. Se a situação financeira de quem paga ou de quem recebe mudar, é possível ajuizar uma ação revisional de alimentos para aumentar, reduzir ou extinguir o valor. Quem perde o emprego ou tem redução de renda também pode buscar a revisão.

Conclusão

A pensão alimentícia é um direito fundamental, mas cada caso tem particularidades que exigem análise cuidadosa. Este artigo tem caráter meramente informativo e não substitui a consulta a um advogado. Se você tem dúvidas sobre o tema, procure orientação jurídica especializada para avaliar a melhor estratégia para a sua situação.

Nota: As informações aqui fornecidas são para fins educacionais e informativos e não constituem aconselhamento jurídico formal. Para orientação legal específica e aplicável ao seu caso concreto, é indispensável consultar um advogado devidamente habilitado.`,
    imagem: imgCivil,
    destaque: true,
  },
  {
    id: 2,
    categoria: "Direito Médico",
    data: "18 Set, 2026",
    titulo: "TELEMEDICINA: REGRAS, RESPONSABILIDADE E PROTEÇÃO DE DADOS",
    resumo: "Compreenda o marco regulatório, a responsabilidade civil médica e os cuidados com a LGPD no atendimento remoto.",
    conteudo: `A telemedicina deixou de ser uma tendência para se tornar uma realidade consolidada no sistema de saúde brasileiro. A pandemia de COVID-19 acelerou sua adoção, e o ordenamento jurídico precisou acompanhar essa transformação. Para médicos, instituições de saúde e pacientes, compreender as regras, os limites de responsabilidade e as obrigações de proteção de dados é essencial para uma prática segura e juridicamente adequada.

O marco regulatório da telemedicina no Brasil

A telemedicina foi autorizada e disciplinada no Brasil pela Lei nº 14.510/2022, que alterou a Lei nº 8.080/1990 para permitir a prática da telessaúde em todo o território nacional, e pela Resolução CFM nº 2.314/2022, que definiu e regulamentou a telemedicina como serviços médicos mediados por tecnologias de comunicação. A norma do Conselho Federal de Medicina autoriza a telemedicina em modalidades como teleconsulta, telediagnóstico, telecirurgia e telemonitoramento, sempre com a exigência de que o médico esteja devidamente inscrito no CRM e que a relação profissional seja devidamente documentada.

É importante destacar que a telemedicina não substitui o atendimento presencial quando este for necessário. O médico deve avaliar, caso a caso, se a consulta remota é adequada à situação clínica do paciente, garantindo a segurança e a qualidade do cuidado. A escolha equivocada da modalidade pode gerar responsabilização do profissional.

A responsabilidade civil na prática da telemedicina

A responsabilidade do médico na telemedicina segue, em regra, a mesma lógica do atendimento presencial: trata-se de responsabilidade subjetiva, que exige a comprovação de culpa, conforme os artigos 186 e 951 do Código Civil. O paciente que se sentir lesado deverá demonstrar a conduta culposa do profissional, o dano e o nexo causal.

Contudo, a telemedicina introduz particularidades relevantes. A responsabilidade pode se estender a outros atores, como as plataformas tecnológicas e as instituições que fornecem a infraestrutura. Nesses casos, aplica-se o Código de Defesa do Consumidor, que prevê responsabilidade objetiva para os fornecedores de serviços. Além disso, a falha técnica que prejudique o atendimento, a perda de dados ou a violação do sigilo podem gerar responsabilização civil, administrativa e até penal.

O dever de informação ganha ainda mais relevância no ambiente digital. O paciente deve receber esclarecimentos claros sobre a natureza do atendimento, seus limites e a necessidade de complementação presencial, formalizados por meio do Termo de Consentimento Livre e Esclarecido (TCLE). Na telemedicina, o médico também deve observar as mesmas regras éticas do atendimento presencial, previstas no Código de Ética Médica (Resolução CFM nº 2.217/2018), incluindo o dever de sigilo e o respeito à autonomia do paciente.

Proteção de dados na saúde digital

Os dados de saúde são classificados pela Lei Geral de Proteção de Dados (LGPD), Lei nº 13.709/2018, como dados pessoais sensíveis, merecendo proteção reforçada. O tratamento desses dados exige base legal específica, como o consentimento do titular ou a garantia da prevenção à fraude e à segurança, nos termos do artigo 11 da LGPD.

Médicos e instituições que atuam com telemedicina devem adotar medidas técnicas e organizacionais adequadas, como criptografia, controle de acesso, registro de auditoria e política de privacidade clara. A Autoridade Nacional de Proteção de Dados (ANPD) pode aplicar sanções que incluem advertência, multa e até a suspensão do tratamento de dados. A violação do sigilo profissional, por sua vez, é infração ética e pode configurar crime. Recomenda-se ainda que as plataformas mantenham registros completos das consultas, com identificação do profissional, data, horário e conteúdo do atendimento, garantindo rastreabilidade e segurança jurídica para todas as partes.

Conclusão

A telemedicina amplia o acesso à saúde, mas exige rigor técnico e jurídico. Médicos devem observar as normas do CFM e a LGPD, documentar adequadamente cada atendimento e obter o consentimento informado. Pacientes devem conhecer seus direitos e buscar orientação sempre que houver indícios de falha no atendimento ou uso indevido de seus dados.

O acompanhamento de um advogado especializado é fundamental para prevenir riscos, estruturar a prática digital em conformidade com a lei e atuar de forma segura diante de conflitos envolvendo a saúde.

Nota: As informações aqui fornecidas pelo Advogado Médico são para fins educacionais e informativos e não constituem aconselhamento jurídico formal. Para orientação legal específica e aplicável ao seu caso concreto, é indispensável consultar um advogado devidamente habilitado.`,
    imagem: imgMedico,
    destaque: false,
  },
  {
    id: 3,
    categoria: "Trabalhista",
    data: "10 Set, 2026",
    titulo: "VÍNCULO DE EMPREGO NAS PLATAFORMAS DIGITAIS: UM DEBATE EM CONSTRUÇÃO",
    resumo: "Uma análise abrangente sobre subordinação algorítmica, autonomia e os desdobramentos jurídicos na relação de trabalho por aplicativos.",
    conteudo: `O avanço das plataformas digitais de transporte e entrega transformou o mercado de trabalho brasileiro e recolocou em pauta uma questão central: a relação mantida entre trabalhadores e aplicativos configura vínculo de emprego ou mera parceria comercial? A resposta envolve a revisão de institutos clássicos, como a subordinação jurídica, e o diálogo entre o direito do trabalho e as novas tecnologias.

De um lado, defende-se o reconhecimento do vínculo, com base na subordinação exercida pelos algoritmos, controle de rotas, metas, avaliações e sanções automáticas, na pessoalidade, na onerosidade e na dependência econômica do trabalhador. A doutrina clássica, a exemplo de Amauri Mascaro Nascimento, sempre apontou a subordinação jurídica como elemento essencial da relação de emprego, compreendida como a sujeição do trabalhador ao poder diretivo e fiscalizatório do empregador. Já Mauricio Godinho Delgado amplia esse conceito ao sustentar que a subordinação não exige ordens diretas e imediatas: basta que o trabalhador se insira, de modo integrado, na dinâmica organizativa da empresa, a chamada subordinação estrutural. Sob essa ótica, o trabalhador que depende da plataforma para exercer sua atividade e se submete às suas regras de funcionamento estaria, ainda que indiretamente, integrado à estrutura do negócio.

A evolução tecnológica, contudo, ampliou o debate. Sérgio Pinto Martins, em sua obra "Direito do Trabalho", reconhece que a subordinação assumiu novas modalidades, entre elas a subordinação algorítmica, na qual o controle é exercido por sistemas automatizados de gestão de trabalho, e examina figuras intermediárias, como a parassubordinação, de matriz italiana. São construções teóricas que buscam capturar a realidade das plataformas, em que o trabalhador não recebe ordens de um superior hierárquico, mas é dirigido, avaliado e punido por um algoritmo.

De outro lado, sustenta-se a autonomia do trabalhador: ele decide quando e onde atuar, conecta-se e desconecta-se livremente, não cumpre jornada fixa e não se submete a subordinação jurídica típica, atuando como verdadeiro parceiro da plataforma. Parte da doutrina, como José Affonso Dallegrave Neto, adverte, porém, que essa liberdade é frequentemente apenas formal: o trabalhador escolhe quando se conectar, mas não decide tarifas, rotas, avaliações e critérios de desligamento, que permanecem sob controle exclusivo da plataforma. O confronto entre essas leituras reacende, na prática, o princípio da primazia da realidade, formulado por Américo Plá Rodriguez: na relação de trabalho, prevalecem os fatos sobre a forma. Isso significa que a análise não pode se limitar aos termos do contrato firmado com a plataforma, mas deve considerar como o trabalho é efetivamente prestado, com base nas provas de cada caso concreto.

Em 2025, o legislador regulamentou a situação dos motoristas de aplicativo de transporte de passageiros pela Lei 14.297/2025, que criou a figura do trabalhador autônomo por plataforma, com remuneração mínima por hora, contribuição previdenciária e a exclusão do vínculo de emprego para essa categoria. A lei, contudo, não encerrou o debate, pois sua constitucionalidade e seus efeitos sobre situações anteriores seguem sendo questionados.

Para os entregadores, ainda não há regulamentação específica, e o tema permanece em análise no Supremo Tribunal Federal, no âmbito do Tema 1291 de repercussão geral. Carlos Henrique Bezerra Leite, em seu "Curso de Direito Processual do Trabalho", destaca que a chamada uberização envolve inclusive a definição da competência da Justiça do Trabalho para julgar esses litígios, enquanto os tribunais regionais apresentam decisões divergentes sobre o reconhecimento do vínculo.

O debate também é influenciado por normas internacionais, como a recente convenção da Organização Internacional do Trabalho (OIT) sobre o trabalho em plataformas, que busca fixar parâmetros mínimos de proteção social a esses trabalhadores. Trata-se do reconhecimento de que o direito do trabalho deve acompanhar as transformações do mundo do trabalho, sem se desvincular das finalidades protetivas que o caracterizam.

O cenário é, portanto, de transição e de insegurança jurídica, o que exige a análise concreta de cada caso, a partir das provas, dos contratos e das condições reais de prestação de serviços. A jurisprudência ainda não consolidou entendimento único, e a doutrina segue construindo novos critérios para enfrentar o desafio imposto pelas plataformas digitais e nesse contexto, trabalhadores e empresas devem buscar orientação jurídica especializada para compreender seus direitos e obrigações, em um tema que seguirá em evolução nos próximos anos e que desafia os institutos tradicionais do direito do trabalho brasileiro.

Nota: Este conteúdo tem caráter exclusivamente informativo e educacional, não constituindo aconselhamento jurídico individualizado nem criando vínculo de advocacia. Para análise de caso concreto, procure um advogado de sua confiança.`,
    imagem: imgTrabalhista,
    destaque: false,
  },
  {
    id: 4,
    categoria: "Previdenciário",
    data: "02 Set, 2026",
    titulo: "PLANEJAMENTO PREVIDENCIÁRIO: POR QUE COMEÇAR ANOS ANTES DE SE APOSENTAR?",
    resumo: "Entenda por que a auditoria do CNIS, o tempo especial e o cálculo das regras de transição garantem o melhor benefício no INSS.",
    conteudo: `A aposentadoria é, para a maioria dos trabalhadores, a decisão econômica mais importante da vida: ela define a renda mensal de um período que pode durar décadas. Ainda assim, é comum que o assunto só seja levado a sério quando o segurado está a poucos anos ou meses do benefício, quando parte das oportunidades já se perdeu. O planejamento previdenciário existe exatamente para evitar esse erro.

Planejar a aposentadoria é muito mais do que "pedir o benefício". É um trabalho técnico de auditoria do histórico contributivo, reconhecimento de períodos especiais e rurais, análise das regras de transição aplicáveis e simulação de cenários, para que o segurado escolha, conscientemente, o melhor momento e a melhor regra de concessão. A Constituição Federal assegura a previdência social mediante contribuição (art. 201) e protege o direito adquirido (art. 5º, XXXVI). A Lei de Benefícios (Lei 8.213/1991), no art. 122, garante ao segurado, quando mais vantajoso, o direito à aposentadoria nas condições legais vigentes na data em que completou todos os requisitos. A doutrina de Castro e Lazzari em Manual de Direito Previdenciário, 26. ed., Forense, 2023, e Direito Previdenciário, 5. ed., Método, 2026, distingue exatamente direito adquirido de expectativa de direito: quem ainda não preencheu os requisitos tem apenas expectativas, sujeitas a mudanças legislativas.

A Reforma da Previdência (EC 103/2019) tornou o planejamento ainda mais decisivo. Quem era filiado ao RGPS em 13.11.2019 pode se enquadrar em regras de transição — o sistema de pontos (art. 15), a idade mínima progressiva (art. 16), o pedágio de 50% (art. 17) ou o de 100% (art. 20). Cada uma conduz a tempos e valores diferentes. Sem simulação individualizada, o segurado pode requerer na regra errada e receber, pelo resto da vida, menos do que teria direito.

O cálculo pós-reforma agrava o risco de decisões precipitadas. Na aposentadoria programada (art. 201, § 7º, da CF), a renda mensal inicial parte de 60% da média de todos os salários de contribuição desde julho de 1994, com acréscimo de 2% por ano que exceder 20 anos de contribuição (homens) ou 15 (mulheres). Cada ano de contribuição e cada salário do histórico alteram diretamente o valor futuro e erros antigos no CNIS passam a "custar caro" por décadas. Começar cedo permite três grandes vantagens. A primeira é a auditoria do CNIS: o art. 29-A da Lei 8.213/1991 disciplina o cadastro como principal instrumento de prova do tempo de contribuição, e o art. 55, § 3º, exige prova documental dos períodos. Vínculos não anotados, remunerações a menor ou períodos rurais sem registro são problemas que se resolvem muito mais facilmente enquanto as empresas existem e as provas estão acessíveis.

A segunda vantagem é o tempo especial. Quem trabalhou exposto a agentes nocivos pode ter direito à aposentadoria especial ou à conversão do tempo (arts. 57 e 58 da Lei 8.213/1991), desde que comprove a exposição por PPP e LTCAT. Importante: a conversão do tempo especial em comum só vale para períodos trabalhados até 13/11/2019, após a Reforma da Previdência, o tempo especial não pode mais ser convertido e passou a exigir idade mínima. Muitos segurados possuem esse período e não sabem, cada ano reconhecido pode antecipar a aposentadoria ou elevar a renda. Mais uma vez, os documentos são colhidos durante o vínculo.

A terceira é a gestão das contribuições. Períodos sem recolhimento podem ser indenizados (art. 45-A da Lei 8.212/1991), mas a complementação tardia nem sempre é admitida para todas as regras: o STF discute, no Tema 1329, se contribuições recolhidas após a EC 103/2019 podem enquadrar o segurado na regra de transição do art. 17, questão com repercussão geral reconhecida e suspensão nacional. Planejar antes evita depender dessas controvérsias.

A jurisprudência confirma que o acerto da primeira aposentadoria é praticamente definitivo. No Tema 503, o STF vedou a "desaposentação", isto é, renunciar ao benefício para obter outro recalculado. Por outro lado, reconhece-se a tese do melhor benefício: preenchidos os requisitos, o segurado tem direito à regra mais vantajosa vigente à época (art. 122 da Lei 8.213/1991; STJ, Tema 966). Se é possível errar contra o próprio bolso e é difícil corrigir depois, a conclusão é uma só: melhor calcular antes de requerer.

Na prática, o planejamento começa com passos simples: obter o extrato do CNIS pelo Meu INSS; revisar vínculos, salários e períodos especiais; reunir documentos (CTPS, carnês, PPP, contratos); simular todas as regras aplicáveis; e decidir, com auxílio técnico, se vale adiar o pedido ou requerer imediatamente. O mesmo cuidado se aplica aos servidores públicos (RPPS) e à previdência complementar.

Aposentar-se não precisa ser um salto no escuro. Quem se planeja anos antes transforma o benefício em uma decisão calculada: maior valor, menor risco e tranquilidade financeira em uma fase que deveria ser de descanso. Consulte sempre um advogado especialista em direito previdenciário para avaliar o caso concreto.

Nota: Este conteúdo tem caráter exclusivamente informativo e educacional, não constituindo aconselhamento jurídico individualizado nem criando vínculo de advocacia. Para análise de caso concreto, procure um advogado de sua confiança.`,
    imagem: imgPrevidencia,
    destaque: false,
  },
  {
    id: 5,
    categoria: "Artigos",
    data: "25 Set, 2026",
    titulo: "A PROIBIÇÃO DAS BETS E O DEBATE SOBRE SEGURANÇA JURÍDICA",
    resumo: "Uma análise jusfilosófica e constitutional sobre a intervenção normativa estatal nas apostas de quota fixa e os impactos da transição na segurança jurídica.",
    conteudo: `Em 25 de setembro de 2026, o Governo Federal anunciou a proibição das apostas esportivas de quota fixa (bets) no Brasil. O elemento fático que suscita imediata atenção dogmática e institucional é que a publicação da respectiva Medida Provisória ocorreu a exatos 9 dias da realização do pleito eleitoral para os cargos de Presidente da República, Governadores de Estado, Deputados Federais, Deputados Estaduais e Senadores. O escopo deste artigo não reside na formulação de juízo prévio de valor favorável ou contrário à atividade econômica de apostas, mas na estrita apreciação jusfilosófica e constitucional da segurança jurídica em face de intervenções normativas estatais abruptas no ordenamento jurídico nacional.

Consoante levantamentos veiculados pelos principais órgãos de imprensa, as plataformas digitais de apostas retiraram das famílias brasileiras montante aproximado de R$ 62,5 bilhões ao longo do ano de 2025, magnitude financeira que, conforme apurado pelo Estadão (24/09/2026), perfaz o equivalente a dois quintos do orçamento anual do programa Bolsa Família e ultrapassa o Produto Interno Bruto de quatro unidades da Federação. O cenário econômico e social que circunda a medida apresenta gravidade incontestável: o Brasil registrou no exercício corrente o patamar mais elevado da série histórica da Pesquisa de Endividamento e Inadimplência do Consumidor (PEIC), totalizando 83,9 milhões de pessoas inadimplentes, ao passo que levantamento divulgado pelo UOL/Economia (08/09/2026) denota que 53% dos apostadores declararam atraso no adimplemento de contas ordinárias para manter a prática do jogo.

Trata-se de índice estatístico dotado de inequívoco impacto público, razão pela qual o endividamento civil das famílias constitui objeto legítimo e indeclinável de tutela regulatória por parte do Estado democrático de direito. A controvérsia em análise, contudo, desvincula-se da legitimidade teleológica de resguardo aos vulneráveis econômicos para incidir sobre o procedimento técnico-jurídico empregado pelo Poder Executivo, notadamente o modus operandi da transição estipulada.

A Medida Provisória nº 1.394, editada em 25 de setembro de 2026 (com teor integral publicado pelo UOL), vedou a exploração comercial, a oferta, a intermediação de pagamentos e a publicidade das apostas de quota fixa em todo o território nacional, fixando eficácia imediata a partir de sua publicação oficial. Em consonância com o cronograma estabelecido pelo Poder Executivo e divulgado pela Agência Senado (25/09/2026), o plano de desmobilização do setor foi fracionado segundo os seguintes marcos peremptórios:

• 5 de outubro: termo final para que apostadores promovam o saque voluntário de seus saldos credores e limite temporal para veiculação de contratos publicitários pré-existentes, incluindo a remoção compulsória de sinais distintivos e marcas em patrocínios;
• 6 de outubro: imposição de bloqueio técnico, operatório e telemático de todos os domínios e aplicações de apostas em jurisdição nacional;
• 7 e 8 de outubro: remessa formal das bases de dados empresariais e saldos remanescentes de apostadores pelas companhias às instituições bancárias domiciliadas no país;
• 9 a 14 de outubro: processamento direto do estorno e repasse financeiro dos valores depositados aos respectivos titulares pelas instituições financeiras;
• A partir de 14 de outubro: centralização e assunção subsidiária dos procedimentos de restituição contenciosa ou pendente perante a Caixa Econômica Federal.

O pacote regulatório faz-se acompanhar de mecanismo estatal de renegociação de passivos denominado "Desenrola Brasil 3.0", direcionado à liquidação compulsória de dívidas civis constituídas entre dois e quatro anos e meio, com passivo estimado na ordem de R$ 300 bilhões. Paralelamente, encaminhou-se projeto de lei de natureza punitiva prevendo sanções restritivas de liberdade balizadas entre 4 e 6 anos de reclusão, alcançando o teto de 8 anos segundo divulgado pelo periódico especializado JOTA (25/09/2026), abrangendo expressamente agentes econômicos operacionais e produtores de conteúdo digital associados à intermediação promocional.

Verifica-se, por conseguinte, a previsão formal de rito de descontinuidade estruturado em interregno temporal inferior a três semanas, período manifestamente exíguo para a liquidação patrimonial, contratual e corporativa de uma indústria de serviços digitais em plena operação.

O contraste com a experiência inglesa

As pessoas jurídicas dedicadas ao segmento de apostas de quota fixa, integradas predominantemente por conglomerados societários multinacionais aportaram volumes substanciais de capital no mercado doméstico brasileiro, celebrando contratos complexos com agremiações desportivas, emissoras de radiodifusão, operadoras de televisão aberta e por assinatura e provedores de serviços de internet. Trata-se de avenças de valor milionário, assentadas na autonomia privada e na disciplina civil dos contratos de trato sucessivo, as quais impõem salvaguardas contra extinções repentinas dissociadas da recomposição do equilíbrio econômico-financeiro. A preservação da ordem constitutional exige maturação de prazos de adaptação proporcional, a exemplo do paradigma implementado no Reino Unido, no qual os clubes de futebol da Premier League contaram com 3 anos para readequação estrutural.

A comparação com o direito comparado britânico elucida a divergência procedimental. Em abril de 2023, as próprias entidades de prática desportiva integrantes da liga inglesa deliberaram, por mecanismo voluntário de autorregulação, o encerramento gradual de patrocínios máster frontais de vestuário concedidos a casas de apostas, outorgando a vigência de três temporadas desportivas completas para que os departamentos de receitas substituíssem as fontes pagadoras. A restrição passou a viger exclusivamente na temporada desportiva 2026/2027, momento em que o mercado já havia absorvido novos setores da economia (UOL, 24/09/2026). Registre-se, contudo, a necessária diferenciação fática: o modelo inglês incidiu unicamente sobre a veiculação de patrocínio uniforme decorrente de deliberação privada intercorporativa, sem implicar a erradicação legislativa absoluta do setor pelo Estado.

No cenário brasileiro, o Poder Público trilhou caminho diametralmente oposto. O mercado de apostas de quota fixa foi expressamente institucionalizado e legalizado pela administração pública mediante a promulgação da Lei Federal nº 14.790/2023 e dos diplomas infralegais expedidos pelo Ministério da Fazenda, os quais exigiram o recolhimento antecipado de outorgas onerosas, taxas fiscalizatórias, tributos específicos e adequação contábil e de integridade. Transcorridos apenas dois anos da concessão dos atos administrativos autorizativos, o mesmo ente concedente deliberou pela interrupção terminativa da atividade no exíguo prazo de vinte dias, circunstância que contradiz o postulado de escalonamento gradual — que pressuporia desmobilização sequencial de publicidade telemática, audiovisual e patrocínio desportivo ao longo de 18, 24 ou 36 meses.

Os efeitos jurídicos da virada de chave

Sob a ótica da teoria geral do direito administrativo e constitucional, a imposição de término repentino a atividades reguladas desencadeia o tensionamento imediato de garantias fundamentais:

Confiança legítima e venire contra factum proprium: Pessoas jurídicas que despenderam aportes bilionários para a constituição de domicílio fiscal e operacional no território nacional, fundamentando-se nas balizas normativas formalmente emanadas pelo próprio Estado e solvendo outorgas públicas expressivas, ostentam a titularidade de legítima confiança na continuidade e estabilidade regulatória do sistema. A supressão intempestiva e extemporânea de outorgas administrativas plenamente válidas, sem o estabelecimento de termo transitório para a amortização do capital empatado, delineia hipótese clássica de responsabilidade civil extracontratual do Estado decorrente da ruptura de padrões de previsibilidade (venire contra factum proprium estatal), deflagrando potencial dever indenizatório por danos emergentes e lucros cessantes decorrentes do cancelamento de autorizações legítimas.

Segurança jurídica nos contratos em curso: A repercussão prática mais ostensiva projeta-se sobre o ecossistema desportivo nacional: 14 dos 20 clubes que disputam a Série A do Campeonato Brasileiro mantêm contratos vigentes de patrocínio com operadoras de apostas, quantia que perfaz montante superior a R$ 1 bilhão em obrigações bilaterais ativas. O Clube de Regatas do Flamengo, a título exemplificativo, aufere R$ 268,5 milhões anuais advindos da empresa Betano, cifra que representa 12,85% de sua previsão orçamentária líquida (O Globo, 25/09/2026). De forma agregada, os ingressos derivados do setor compuseram 7,9% de toda a arrecadação das agremiações da divisão de elite em 2025.

Em virtude da determinação de desfazimento célere das campanhas, as empresas operadoras expediram notificações formais aos clubes comunicando a iminente resilição contratual por caso fortuito ou fato do príncipe (factum principis) e formalizaram a preparação de demandas contenciosas contra a União Federal (Estadão, 24/09/2026), cenário que culminou na subscrição de manifesto corporativo pelas entidades desportivas (UOL, 17/09/2026). A lacuna de segurança estende-se aos contratos de veiculação na mídia e aos direitos de transmissão cedidos às redes de radiodifusão e plataformas digitais. O diploma emergencial silencia a respeito de compensações e da salvaguarda das posições jurídicas de terceiros de boa-fé atingidos por efeitos reflexos, transferindo ao Judiciário a liquidação do passivo rescisório gerado.

Medida Provisória e reserva legal: A Medida Provisória detém natureza de provimento precário de eficácia imediata submetido à ulterior deliberação das Casas do Congresso Nacional pelo prazo constitucional decadencial de 60 dias, passível de prorrogação única. A extinção sumária de todo um ramo econômico previamente normatizado por via de lei formal atenta contra a intensidade deliberativa que a matéria reclama, subvertendo a exigência de reserva de lei e o processo legislativo ordinário participativo, com instrução de audiências públicas e fixação consensual de fases de amortização. Por fim, o fator cronológico — consubstanciado na edição da medida a escassos nove dias do pleito geral — expõe a atuação estatal à arguição de desvio de finalidade e inconstitucionalidade material em sede de controle concentrado perante o Supremo Tribunal Federal, sob a ótica da falta de razoabilidade e desproporcionalidade do provimento de urgência.

O que uma transição adequada teria a oferecer

O reconhecimento da necessidade de um regime de transição não desnatura ou anula o poder de polícia inerente à administração pública para tutelar bens coletivos de primeira grandeza, como a saúde psíquica da população e a ordem econômica familiar. Danos de caráter social e psiquiátrico devidamente comprovados autorizam o Estado a condicionar e até mesmo expurgar ramos mercantis de seu território. O paralelismo jurisprudencial consagrado no caso das indústrias de tabaco corrobora tal competência; entretanto, a vedação da publicidade e patrocínio desportivo dos derivados do tabaco operou-se de forma gradativa ao longo de sucessivas décadas, amparada por marcos de modulação normativa e desindexação paulatina.

A estipulação de um prazo de carência proporcional de 18 a 36 meses, conforme preconizado por operadores do direito econômico e desportivo, resguardaria quatro vértices operacionais essenciais:

1. A liquidação programada e ordenada das relações obrigacionais de patrocínio, veiculação e publicidade privada, mitigando a deflagração em massa de litígios indenizatórios e rescisões motivadas por fato da administração;
2. A reestruturação de governança e reposicionamento orçamentário das entidades de prática desportiva e veículos de comunicação social, assegurando estabilidade funcional ao calendário esportivo e ao mercado publicitário;
3. A liquidação coordenada de passivos trabalhistas, contratuais, securitários e tributários contraídos pelas empresas que ingressaram regularmente no regime da Lei Federal nº 14.790/2023;
4. A implementação eficaz e orçamentariamente provida de programas de saúde pública e assistência clínica destinados aos portadores de dependência patológica do jogo (transtorno do jogo compulsivo), impedindo a mera migração clandestina de usuários para plataformas ilegais hospedadas em paraísos fiscais e jurisdições sem cooperação técnica.

A precipitação regulatória desenhada pela medida arrisca produzir um quadro de ineficiência generalizada: a paralisia do mercado formal, o rompimento litigioso em cadeia de contratos privados e, na eventualidade de acolhimento judicial das teses indenizatórias deduzidas pelas concessionárias prejudicadas, a condenação patrimonial da União Federal perante os mesmos grupos econômicos que tencionava compelir — sem que as raízes estruturais da inadimplência das famílias brasileiras sejam sanadas por decreto.

Reitera-se que o cerne do debate constitucional em testilha não se confunde com posições de apreço ou repulsa em relação à atividade de exploração de apostas. Trata-se de assegurar o princípio da segurança jurídica no Estado de Direito — preceito axiológico basilar que assegura aos cidadãos, empresários e investidores que as regras regulatórias incidentes sobre a produção, investimento e geração de empregos mantenham o mínimo de higidez e estabilidade temporal.

Na medida em que a administração pública inaugura um sistema regulatório, concede títulos autorizativos remunerados e, no lapso subsequente de dois anos, dissolve integralmente as bases contratuais com eficácia de apenas vinte dias, os prejuízos decorrentes transcendem as fronteiras dos operadores do jogo: alcançam clubes, cadeias da indústria de entretenimento, profissionais e a credibilidade das instituições públicas perante os agentes que precificam o custo-país. Provimentos dotados de abrangência socioeconômica de tal envergadura impõem rigor formal e densidade procedimental. A ausência de ponderação e transição, no direito, costuma gerar passivos que acabam cobrados nas instâncias do Poder Judiciário.

Referências

• AGÊNCIA BRASIL. Bets passam a ser proibidas no país e apostador receberá saldo. 26/09/2026.
• AGÊNCIA SENADO. Poder Executivo anuncia MPs contra bets e endividamento das famílias. 25/09/2026.
• ESTADÃO. Bets notificam clubes sobre possível rescisão de contratos e preparam ação judicial contra o governo. 24/09/2026.
• ESTADÃO. Proibir as bets pode diminuir a inadimplência do brasileiro? 25/09/2026.
• G1. A 9 dias das eleições, governo anuncia proibição de bets no Brasil. 25/09/2026.
• JOTA. Pacote de Lula contra bets prevê proibição e até oito anos de prisão. 25/09/2026.
• O GLOBO. 14 clubes da Série A devem ser afetados por MP das bets; saiba quanto cada um pode perder. 25/09/2026.
• UOL. Futebol inglês restringiu bets em 3 anos; cenário é possível no Brasil? 24/09/2026.
• UOL. Leia a íntegra do texto da MP que veta bets no Brasil. 25/09/2026.
• UOL/ECONOMIA. Dos apostadores, 53% já atrasaram contas para jogar em bets, diz estudo. 08/09/2026.

Nota: Este conteúdo tem caráter exclusivamente informativo e educacional, não constituindo aconselhamento jurídico individualizado nem criando vínculo de advocacia. Para análise de caso concreto, procure um advogado de sua confiança.`,
    imagem: imgConstitucional,
    destaque: false,
  },
];

export function Publicacoes() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todas");
  const [noticiaAberta, setNoticiaAberta] = useState(null);
  const [menuFiltrosAberto, setMenuFiltrosAberto] = useState(false);

  const categorias = ["Todas", ...new Set(noticias.map((n) => n.categoria))];

  const noticiasFiltradas =
    categoriaAtiva === "Todas"
      ? noticias
      : noticias.filter((n) => n.categoria === categoriaAtiva);

  const destaque = noticiasFiltradas.find((n) => n.destaque) || noticiasFiltradas[0];
  const secundarias = noticiasFiltradas.filter((n) => n.id !== destaque?.id);

  return (
    <section className="flex flex-col p-4 md:p-8 min-h-screen gap-8 max-w-7xl mx-auto pb-20 md:pb-10 font-sans">
      {/* Cabeçalho com Filtro Expansível */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-700/50 pb-4 gap-4">
        <div>
          <span className="text-amber-500 text-xs uppercase tracking-widest font-semibold">
            Informativo Jurídico
          </span>
          <h2 className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-800 bg-clip-text text-transparent font-bold text-2xl md:text-3xl">
            Publicações & Artigos
          </h2>
        </div>

        {/* Botão de Filtro Expansível */}
        <div className="relative">
          <button
            onClick={() => setMenuFiltrosAberto(!menuFiltrosAberto)}
            className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-gray-900 text-amber-500 hover:bg-gray-800 border border-amber-600/50 text-xs font-semibold transition-all duration-200 cursor-pointer shadow-lg"
          >
            <i className="fa-solid fa-filter"></i>
            <span>
              Categoria: <strong className="text-white">{categoriaAtiva}</strong>
            </span>
            <i
              className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-300 ${
                menuFiltrosAberto ? "rotate-180" : ""
              }`}
            ></i>
          </button>

          {/* Menu Dropdown de Categorias */}
          {menuFiltrosAberto && (
            <div className="absolute right-0 mt-2 z-30 bg-gray-900/95 backdrop-blur-md border border-amber-500/30 rounded-2xl p-3 shadow-2xl flex flex-wrap gap-2 w-64 md:w-80 animate-fadeIn">
              {categorias.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setCategoriaAtiva(cat);
                    setMenuFiltrosAberto(false);
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    categoriaAtiva === cat
                      ? "bg-amber-500 text-black shadow-md shadow-amber-500/20 font-bold"
                      : "bg-gray-800/80 text-gray-300 hover:bg-gray-700 border border-amber-700/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Grade Principal de Notícias */}
      {destaque && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Notícia Destaque Principal */}
          <article
            onClick={() => setNoticiaAberta(destaque)}
            className="lg:col-span-7 group cursor-pointer relative rounded-2xl overflow-hidden border border-amber-700/40 bg-gray-900/40 flex flex-col justify-end min-h-[400px] lg:h-[540px] transition-all duration-300 hover:border-amber-500/50 shadow-xl"
          >
            <img
              src={destaque.imagem}
              alt={destaque.titulo}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

            <div className="relative p-6 md:p-8 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="bg-amber-500 text-black font-bold text-[10px] uppercase px-2.5 py-1 rounded">
                  {destaque.categoria}
                </span>
                <span className="text-gray-400 text-xs">{destaque.data}</span>
              </div>

              <h3 className="text-white font-bold text-xl md:text-2xl group-hover:text-amber-400 transition-colors">
                {destaque.titulo}
              </h3>

              <p className="text-gray-300 text-sm line-clamp-2">
                {destaque.resumo}
              </p>

              <div className="flex items-center gap-2 text-amber-500 text-xs font-bold pt-2">
                Ler matéria completa <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </article>

          {/* Lista Secundária de Notícias com Scroll Independente */}
          <div className="lg:col-span-5 h-[540px] overflow-y-auto pr-2 flex flex-col gap-4 scrollbar-thin scrollbar-thumb-amber-600/50 scrollbar-track-gray-900/40">
            {secundarias.map((noticia) => (
              <article
                key={noticia.id}
                onClick={() => setNoticiaAberta(noticia)}
                className="group cursor-pointer flex gap-4 p-3 rounded-xl border border-gray-700/30 bg-black hover:bg-gray-800/40 hover:border-amber-500/40 transition-all duration-200 flex-shrink-0"
              >
                <img
                  src={noticia.imagem}
                  alt={noticia.titulo}
                  className="w-24 h-24 md:w-28 md:h-28 rounded-lg object-cover flex-shrink-0 border border-amber-500/60"
                />
                <div className="flex flex-col justify-between py-1 flex-1">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-amber-500 text-[11px] font-semibold">
                        {noticia.categoria}
                      </span>
                      <span className="text-gray-500 text-[10px]">• {noticia.data}</span>
                    </div>
                    <h4 className="text-white font-bold text-sm line-clamp-2 group-hover:text-amber-400 transition-colors">
                      {noticia.titulo}
                    </h4>
                  </div>
                  <span className="text-xs text-white flex items-center gap-1">
                    Leia mais <i className="fa-solid fa-chevron-right text-[10px]"></i>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* MODAL / LEITOR DE NOTÍCIA COMPLETA COM ALTO CONTRASTE E TIPOGRAFIA EDITORIAL */}
      {noticiaAberta && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-zinc-950 border border-amber-500/40 rounded-2xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col">
            {/* Imagem de Capa no Modal */}
            <div className="relative h-56 md:h-72 w-full flex-shrink-0 bg-zinc-900">
              <img
                src={noticiaAberta.imagem}
                alt={noticiaAberta.titulo}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
              <button
                onClick={() => setNoticiaAberta(null)}
                className="absolute top-4 right-4 bg-black/80 text-zinc-300 hover:text-amber-400 hover:scale-110 w-9 h-9 rounded-full flex items-center justify-center border border-zinc-700/60 transition-all cursor-pointer shadow-lg"
                title="Fechar (Esc)"
              >
                ✕
              </button>
            </div>

            {/* Container Principal de Leitura */}
            <div className="p-6 md:p-10 overflow-y-auto flex-1 flex flex-col gap-6 selection:bg-amber-500/30 selection:text-amber-200">
              {/* Badge & Data */}
              <div className="flex items-center gap-3 font-sans">
                <span className="bg-amber-500/20 text-amber-400 border border-amber-500/40 font-bold text-xs px-3 py-1 rounded-md tracking-wider uppercase">
                  {noticiaAberta.categoria}
                </span>
                <span className="text-zinc-400 text-xs font-medium">
                  • {noticiaAberta.data}
                </span>
              </div>

              {/* Título Principal de Alto Contraste */}
              <h3 className="text-zinc-50 font-sans font-extrabold text-2xl md:text-3xl leading-snug tracking-tight">
                {noticiaAberta.titulo}
              </h3>

              {/* Resumo / Lide do Artigo */}
              <div className="p-4 rounded-xl bg-amber-950/20 border-l-4 border-amber-500 text-amber-100/90 italic font-serif text-base md:text-lg leading-relaxed shadow-inner">
                {noticiaAberta.resumo}
              </div>

              <hr className="border-zinc-800 my-1" />

              {/* Corpo da Notícia com Fonte Serifada para Máximo Conforto de Leitura */}
              <div className="font-serif text-zinc-100 text-base md:text-lg leading-relaxed md:leading-loose space-y-5 tracking-normal">
                {noticiaAberta.conteudo
                  .split("\n\n")
                  .filter((bloco) => bloco.trim() !== "")
                  .map((bloco, index) => {
                    const texto = bloco.trim();

                    {/* Bloco de Nota Legal/Aviso */}
                    if (texto.startsWith("Nota:")) {
                      return (
                        <div
                          key={index}
                          className="mt-8 p-5 rounded-xl bg-zinc-900/90 border border-zinc-800 font-sans text-xs md:text-sm text-zinc-400 italic leading-relaxed shadow-md"
                        >
                          <strong className="text-amber-400 not-italic block mb-1">
                            Aviso Legal:
                          </strong>
                          {texto.replace(/^Nota:\s*/, "")}
                        </div>
                      );
                    }

                    {/* Bloco de Tópicos/Listas com Marcadores */}
                    if (texto.startsWith("•")) {
                      return (
                        <div
                          key={index}
                          className="pl-4 border-l-2 border-amber-500/50 my-2 font-serif text-zinc-200"
                        >
                          <p className="text-zinc-100 text-base md:text-lg">
                            {texto}
                          </p>
                        </div>
                      );
                    }

                    {/* Identificação de Subtítulos do Texto */}
                    const isTitulo =
                      texto.endsWith("?") ||
                      texto === "Conclusão" ||
                      texto === "Referências" ||
                      (texto.length < 65 && !texto.endsWith(".") && !texto.includes(","));

                    if (isTitulo) {
                      return (
                        <h4
                          key={index}
                          className="font-sans font-bold text-amber-400 text-lg md:text-xl pt-4 border-b border-zinc-800/80 pb-2 tracking-wide"
                        >
                          {texto}
                        </h4>
                      );
                    }

                    {/* Parágrafo Padrão de Leitura */}
                    return (
                      <p key={index} className="text-zinc-100 font-serif">
                        {texto}
                      </p>
                    );
                  })}
              </div>
            </div>

            {/* Rodapé do Modal com Alto Contraste e Botão Discreto de Contato */}
            <div className="p-4 md:px-8 border-t border-zinc-800/80 flex items-center justify-between bg-zinc-900/80 backdrop-blur-md font-sans">
              {/* Botão de Contato Discreto */}
              <a
                href="#contato"
                onClick={() => setNoticiaAberta(null)}
                className="px-5 py-2.5 rounded-lg border border-amber-500/50 text-amber-400 hover:bg-amber-500 hover:text-black font-semibold text-xs transition-all duration-200 cursor-pointer uppercase tracking-wider shadow-sm"
              >
                Contato
              </a>

              {/* Botão de Fechar */}
              <button
                onClick={() => setNoticiaAberta(null)}
                className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer border border-zinc-700"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}