FROM python:alpine3.18
WORKDIR /user/src/app
COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY . .
EXPOSE 5000
