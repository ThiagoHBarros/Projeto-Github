import { Component, OnInit } from '@angular/core';
import { Infos } from 'src/app/infosgithub';
import { ProjgitService } from 'src/app/projgit.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})

export class BuscaComponent implements OnInit {
  
  info = new Infos();
  erro: any;
  Encontrou: boolean = false;
  NEncontrou: boolean = false;

  constructor(private projgitService: ProjgitService) {
    this.realizarbusca();
  }

  ngOnInit(): void {
    this.realizarbusca();
  }

  realizarbusca() {
    this.projgitService.getInfos().subscribe((data: Infos) => 
    {
      this.info = data;
    }, 
    error => {
      this.erro = error;
    })
  }

  getInformacoes(busca: string) 
  {
    if (busca == this.info.name || busca == this.info.login) 
    {
      this.Encontrou = true;
      this.NEncontrou = false;
    } 
    else if (busca != this.info.name || busca != this.info.login) 
    {
      this.Encontrou = false;
      this.NEncontrou = true;
    }
  }


}