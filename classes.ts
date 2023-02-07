class BankAccount{
    private accountBalance: number
    private accountID: string
    private name: string
    private password: string

    constructor(balance:number, name: string, password: string){
        this.accountBalance = balance
        this.name = name 
        this.password = password
        this.accountID = this.createID()
    }
    private createID(){
        const array: number[] = []
        for(let i:number = 0; i < 19; i++){
            array.push(Math.floor(Math.random() * 10))
        }
        return array.join("")
    }

    private checkAuth(auth:string){
        if(auth === this.password){
            return true
        }
        return false
    }
    
    public getBalance(auth:string){
        if(this.checkAuth(auth)){
            return this.accountBalance
        }
        return "authorization failed"
    }
    
    public modifyBalance(auth:string, modifier: number){
        if(this.checkAuth(auth)){
            this.accountBalance += modifier
        }
        return "authorization failed"
    }
    public getAccountID(auth:string){
        if(this.checkAuth(auth)){
            return this.accountID
        }
        return "authorization failed"
    }
}

const account1 = new BankAccount(450, "John Smith", "pass")
account1.modifyBalance("pass", -20)
console.log(account1.getBalance("pass"))
console.log(account1.getAccountID("pass"))