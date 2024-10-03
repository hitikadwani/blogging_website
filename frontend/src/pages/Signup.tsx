import { Qoute } from "../components/Qoute"
import { Auth } from "../components/Auth"


export const Signup = () => {
      return <div className="grid grid-cols-2=1 lg:grid-cols-2"> 
        <div>
          <Auth type = "signup" />
        </div>
        <div className="hidden lg:block">
         <Qoute />
        </div>
        
    </div>
}