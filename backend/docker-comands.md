## comando para criar uma nova imagem no docker
docker build -t nome_da_nova_imagem ./caminho

## comando para rodar o projeto docker
docker run -p  3333:3333 nome_da_nova_imagem

## comando para listar as imagens
docker ps

## comando para parar a execução de uma imagem
docker stop id_da_imagem

## comando para remove uma imagem 
docker rm id_da_imagem

## comando para rodar a imagem docker em background
docker-componse up -d

## comando para ver os logs da imagem docker que está rodando em background 
docker logs nome_da_imagem -f 