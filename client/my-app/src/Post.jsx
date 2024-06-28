import Iroman from "./ıroman.jpg";

export default function Post() {
     return (
          <div className="post">
          <div className="image">
          <img src={Iroman} alt=""/>
          </div>    
          <div className="texts">
          <h2>Iron Man 3</h2>
          <p className="info">
            <a className="author">Dawid Paszko</a>
            <time>2023-01-06 16:45</time>
          </p>
            <p className="summary"> Amerikan yapımı, yedinci Marvel Sinematik Evreni süper kahraman filmi.
             Marvel Comics tarafından yaratılan Iron Man karakterinin beyazperdedeki üçüncü filmidir. 
             Filmin başrolünü Robert Downey Jr. ve Gwyneth Paltrow paylaşmıştır. 
             Filmin yönetmenliğini ise Shane Black yapmıştır.
             </p>
          </div>
         </div>
     )
}