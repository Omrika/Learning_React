var Demo = React.createClass({
     render: function () {
          return (
                    <div className="container">
                    <h1>React.js Radio Group Demo</h1>
                    
                    <form>
                         <p className="h3">How did you hear about us?</p>

                         <RadioOption value="newspaper">Newspaper</RadioOption>
                         <RadioOption value="radio">Radio</RadioOption>
                         <RadioOption value="television">Television</RadioOption>
                         <RadioOption value="search">Search Engine</RadioOption>
                         <RadioOption value="social">Social Network</RadioOption>
                         <RadioOption value="newspaper">Newspaper</RadioOption>
                         
                         <RadioOtherOption/>
                         
                         <p><input type="submit"/></p>
                    </form>
               </div>
          );
     }
});