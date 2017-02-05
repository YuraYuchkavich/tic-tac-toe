class TicTacToe {
    constructor(x='x', o='o') {
		this.s=x;
		this.ws=o;
		this.f=[[null,null,null],[null,null,null],[null,null,null]];
    }

    getCurrentPlayerSymbol() {
		return this.s;
    }

    nextTurn(rowIndex, columnIndex) {
		if(this.f[rowIndex][columnIndex]!=this.s && this.f[rowIndex][columnIndex]!=this.ws) {
			this.f[rowIndex][columnIndex]=this.s;
			let t=this.s;
			this.s=this.ws;
			this.ws=t;
		}
    }

    isFinished() {
		if(this.isDraw()==true || this.getWinner()!=null) return true; else return false;
    }

    getWinner() {
		if(this.noMoreTurns==false) return null;
		
		var i=0, w=this.getFieldValue(0,0);
		
		if(w!=null) while(i<3 && w==this.getFieldValue(0, i)) {
			if(i==2) return this.getFieldValue(0, i);
			w=this.getFieldValue(0, i);
			i++;
		}
		
		w=this.getFieldValue(1,0);
		i=0;
		
		if(w!=null) while(i<3 && w==this.getFieldValue(1, i)) {
			if(i==2) return this.getFieldValue(1, i);
			w=this.getFieldValue(1, i);
			i++;
		}
		
		w=this.getFieldValue(2,0);
		i=0;
		
		if(w!=null) while(i<3 && w==this.getFieldValue(2, i)) {
			if(i==2) return this.getFieldValue(2, i);
			w=this.getFieldValue(2, i);
			i++;
		}
		
		i=0;
		w=this.getFieldValue(0,0);
		
		if(w!=null) while(i<3 && w==this.getFieldValue(i, 0)) {
			if(i==2) return this.getFieldValue(i, 0);
			w=this.getFieldValue(i, 0);
			i++;
		}
		
		w=this.getFieldValue(0, 1);
		i=0;
		
		if(w!=null) while(i<3 && w==this.getFieldValue(i, 1)) {
			if(i==2) return this.getFieldValue(i, 1);
			w=this.getFieldValue(i, 1);
			i++;
		}
		
		w=this.getFieldValue(0, 2);
		i=0;
		
		if(w!=null) while(i<3 && w==this.getFieldValue(i, 2)) {
			if(i==2) return this.getFieldValue(i, 2);
			w=this.getFieldValue(i, 2);
			i++;
		}
		
		i=0;
		w=this.getFieldValue(0,0);
		var j=0;
		
		if(w!=null) while(i<3 && j<3 && w==this.getFieldValue(i, j)) {
			if(i==2) return this.getFieldValue(i, j);
			w=this.getFieldValue(i, j);
			i++;
			j++;
		}
		
		w=this.getFieldValue(0, 2);
		i=0;
		j=2;
		
		if(w!=null) while(i<3 && j>=0 && w==this.getFieldValue(i, j)) {
			if(i==2) return this.getFieldValue(i, j);
			w=this.getFieldValue(i, j);
			i++;
			j--;
		}
		
		return null;
    }

    noMoreTurns() {
		for(var i=0; i<3; i++) {
			for(var j=0; j<3; j++) {
				if(this.f[i][j]==null) return false;
			}
		}
		return true;
    }

    isDraw() {
		if(this.noMoreTurns()==true && this.getWinner()==null) return true; else return false;
    }

    getFieldValue(rowIndex, colIndex) {
		return this.f[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;

