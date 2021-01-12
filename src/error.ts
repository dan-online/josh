class CustomError extends Error {
  message: string;
  name: string;
  constructor(message: string, name: string | null = null) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.name = name || 'JoshError';
    this.message = message;
  }
}

export default CustomError;
