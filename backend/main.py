from fastapi import FastAPI

app = FastAPI(title="My First Full Stack App")


@app.get("/")
def root():
    return {"message": "Backend is running 🚀"}


@app.get("/health")
def health_check():
    return {"status": "ok"}


@app.get("/hello/{name}")
def say_hello(name: str):
    return {"message": f"Hello {name}!"}
