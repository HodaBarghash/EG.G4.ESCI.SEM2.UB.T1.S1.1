function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5vOEJfq71ki":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbzbBRnTssO3Ss07h1pfKADAPl0H8r6oBKH8b9Ln-orKwAtST2FCc04GtcLQXmS5WJYK7A/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

