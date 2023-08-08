# Sintetizador de Voz em JS
Este é um aplicativo simples que permite que o usuário digite um texto e o ouça lido em voz alta pelo sintetizador de voz do navegador. Para isso, ele usa a API de síntese de voz do navegador, que permite que o navegador converta texto em fala.

## Como usar
Para usar o aplicativo, basta abrir o arquivo HTML em um navegador que suporte a API de síntese de voz (como o Google Chrome). Em seguida, basta digitar o texto que deseja ouvir na área de texto e clicar no botão "Ouvir". O texto será lido em voz alta pelo sintetizador de voz do navegador.

## Personalização
O aplicativo também permite personalizar algumas opções, como a voz que será usada para ler o texto, a velocidade da fala e o tom. Isso é feito através de propriedades especiais do objeto SpeechSynthesisUtterance, que representa uma fala sintetizada pelo navegador.

Para alterar a voz, basta usar a propriedade voice e atribuir a ela um objeto Voice da lista de vozes disponíveis. Por exemplo, para alterar a voz para "Joana", você pode usar o código seguinte:
utterance.voice = synth.getVoices().find(voice => voice.name === 'Joana');

Para alterar a velocidade da fala, basta usar a propriedade rate e atribuir a ela um valor de 0.1 a 10. Por exemplo, para definir a velocidade como padrão (1.0), você pode usar o código seguinte:
utterance.rate = 1.0;

Para alterar o tom da fala, basta usar a propriedade pitch e atribuir a ela um valor ex: normal = 1.0
