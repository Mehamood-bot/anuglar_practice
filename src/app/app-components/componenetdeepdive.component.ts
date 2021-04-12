import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componenetdeepdive',
  templateUrl: './componenetdeepdive.component.html',
  styleUrls: ['./componenetdeepdive.component.css']
})
export class ComponenetdeepdiveComponent implements OnInit {
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];
  constructor() { }

  ngOnInit(): void {
  }

  //life cycle hooks

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }


  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

}
