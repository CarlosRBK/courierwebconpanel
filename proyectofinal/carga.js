const ACCESS_TOKEN =
  "ya29.a0Aa4xrXPIFarvht6xCkLxt3oJ7kh8LtMNSZpTILpbT0WH-smVp-1GkjxnwnI9zsxdafpfE3lLSm_xgV_Q1-BrhCnMo8XDlPsUNKZ31yLclUL4Q-URuqKiKi7nJ26C-eevZV43YIqY057gnFN49JPjzmSLZEmJaCgYKATASARMSFQEjDvL9TcVKbmF7yRZjBv-x25mElw0163";
 
const SHEET_ID = '1X7QgEvcljDixZVvCkvTxpWbkttZHhDOoo-23HCt-znI';

//Inicializamos la fecha a la fecha de hoy
document.getElementById('fecha').valueAsDate = new Date();


function onRegistrarBoleta() {

  //Obtenemos los datos del formulario
  const fecha = document.getElementById('fecha').value;
  const remitente = document.getElementById('remitente').value;
  const origen = document.getElementById('origen').value;
  const destinatario = document.getElementById('destinatario').value;
  const destino = document.getElementById('destino').value;
  const descripcion = document.getElementById('descripcion').value;
  const medioPago = document.getElementById('medio-pago').value;
  const monto = document.getElementById('monto').value;
  
  //Creamos el JSON que espera nuestra API
  let data = {};
  
  let values = [];
  
  let fila = [fecha, remitente, origen, destinatario, destino, descripcion, medioPago, monto];

  values.push(fila);
  
  //Verificar que coincida con el nombre de la hoja de nuestro sheet
  data.range = "boletas";
  
  data.majorDimension = "ROWS";
  data.values = values;

  //Invocamos al método POST de la API
  fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/boletas:append?valueInputOption=USER_ENTERED`,
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify(data)
    }
  ).then(function (response) {
    response.json().then(function (data) {

    });
  });

  //Limpiamos los campos del formulario para permitir cargar un nuevo gasto
  document.getElementById('fecha').valueAsDate = new Date();
  document.getElementById('remitente').value = "";
  document.getElementById('origen').value = "";
  document.getElementById('destinatario').value = "";
  document.getElementById('destino').value = "";
  document.getElementById('descripcion').value = "";
  document.getElementById('medio-pago').value = "";
  document.getElementById('monto').value = "";

  alert("Boleta cargada!")
};