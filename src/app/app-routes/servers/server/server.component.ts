import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.server = data['server'];
        }
      );
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.server = this.serversService.getServer(+params['id']);
    //     }
    //   );
  }

  onEdit() {
    // queryParamsHandling preserve, not remvoe old url while acesssing , 
    //before click edit button url would be http://localhost:4401/routes/servers/1?allowEdit=0#loading
    // after click edit button url would be http://localhost:4401/routes/servers/1/edit
    // to deal with this we use qurey param handler nor url would be after edit server 
    //http://localhost:4401/routes/servers/1/edit?allowEdit=0 , by preserve we have quresparams in url  , 
    // and by passing merge instead preserve we can add new url to old url
    this.router.navigate(['edit'], {relativeTo: this.route,queryParamsHandling:"preserve"});
  }

}
