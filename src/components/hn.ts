class HackerNews {

  firebase: any;

  constructor(firebase: any) {
    this.firebase = firebase;
    this._getTopHN();
  }

  private _getTopHN() {
    var ref = new this.firebase("https://hacker-news.firebaseio.com/v0/");

    ref.child('topstories').once('value', (snapshot) => {
      var ids = snapshot.val();

      for(var i = 0; i < 25;  i++) {
        this._getItemDetails(i, ids[i])
      }

    });
  }

  private _getItemDetails(index: number, id: string) {
    var ref = new this.firebase("https://hacker-news.firebaseio.com/v0/item/" + id);
    var elem = <HTMLElement>document.getElementsByClassName('hn-stories')[0];

    ref.once('value', (snapshot) => {
        var link = document.createElement('a');
        link.innerHTML = index+1+") "+snapshot.val().title;
        link.addEventListener('click', function(ev) {
            link.href = snapshot.val().url;
        }, false);
        elem.appendChild(link);
        elem.appendChild(document.createElement('br'));
    });
  }

}

export = HackerNews;
