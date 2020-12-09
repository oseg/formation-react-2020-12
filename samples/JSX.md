
<toto />                                      React.createElement('toto', {})
<Toto />                                      React.createElement(Toto, {})

<Toto text="coucou" nb="42" />                React.createElement(Toto, { text: 'coucou', nb: '42' })

<Toto>                                        React.createElement(Toto, {},
  <span className="x">coucou</span>             React.createElement('span', { className: "x" }, "coucou"),
  <Truc />                                      React.createElement(Truc, {}),
</Toto>                                       )

<Toto text={text + "!"} />                    React.createElement(Toto, { text: text + "!" })

<div>                                         React.createElement('div', {},
  {condition && <Toto />}                       condition && React.createElement(Toto),
</div>                                        )

condition vraie:
<div>                                         React.createElement('div', {},
  {<Toto />}                                    React.createElement(Toto),
</div>                                        )

condition fausse:
<div>                                         React.createElement('div', {},
  {false}                                       false,
</div>                                        )

boucles:
<div>                                         React.createElement('div', {},
  {array.map(value => <Toto x={value} />)}      array.map(value => React.createElement(Toto, { x: value }))
</div>                                        )
