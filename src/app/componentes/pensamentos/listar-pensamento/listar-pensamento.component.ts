import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos =[
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo2'
    },
    {
      conteudo: '"Não há nada permanente, exceto a mudança." - Heráclito. Este filósofo pré-socrático acreditava que o universo é regido pela mudança constante, e que a estabilidade e a permanência são ilusórias. Sua famosa citação nos lembra que tudo na vida está em constante evolução e transformação, e que é importante abraçar a mudança em vez de resistir a ela',
      autoria: 'ChatGPT',
      modelo: 'modelo1'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
