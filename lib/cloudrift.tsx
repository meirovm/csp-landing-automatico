// ============================================================================
// Constants
// ============================================================================

const API_VERSIONS = {
  PRODUCTION: '2025-12-27',
  UPCOMING: '~upcoming',
} as const;

// ============================================================================
// Core API Functions
// ============================================================================

export async function apiRequest<TResponse, TRequest extends object = object>(
  endpoint: string,
  requestData?: TRequest,
  method: string = 'POST',
  timeoutMs: number = 40000
): Promise<TResponse> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  // Methods that can have a body
  const methodsWithBody = ['POST', 'PUT', 'PATCH'];
  const shouldIncludeBody = methodsWithBody.includes(method.toUpperCase());

  let fetchOptions: RequestInit = {
    method,
    headers,
  };

  if (shouldIncludeBody && requestData) {
    const body: { data: TRequest; version: string } = {
      data: requestData,
      version: getRiftApiVersion(),
    };
    fetchOptions = {
      ...fetchOptions,
      body: JSON.stringify(body),
    };
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const apiUrl = getRiftApiUrl();
    const response = await fetch(`${apiUrl}${endpoint}`, {
      ...fetchOptions,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    const contentType = response.headers.get('Content-Type');
    const responseText = await response.text();

    if (!response.ok) {
      const error = new Error(
        `Request failed with status code: ${response.status}`
      );
      throw error;
    }

    if (response.status === 204) {
      return undefined as TResponse;
    }

    if (contentType && contentType.includes('application/json')) {
      try {
        const jsonResponse = JSON.parse(responseText);
        return jsonResponse as TResponse;
      } catch {
        throw new Error(
          `Failed to parse response as JSON. Status code: ${response.status}, response: ${responseText}`
        );
      }
    } else {
      return responseText as unknown as TResponse;
    }
  } catch (error) {
    clearTimeout(timeoutId);

    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error(
        'The request took too long to complete. Please check your connection and try again.'
      );
    }

    throw error;
  }
}

// ============================================================================
// Environment Configuration Getters
// ============================================================================

// --- API Configuration ---

export function getRiftApiUrl(): string {
  return process.env.NEXT_PUBLIC_RIFT_API_URL || 'https://api.cloudrift.ai';
}

export function getRiftApiVersion(): string {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') {
    return API_VERSIONS.PRODUCTION;
  }
  return API_VERSIONS.UPCOMING;
}

export function getRiftConsoleUrl(): string {
  return process.env.NEXT_PUBLIC_RIFT_CONSOLE_URL || 'https://console.cloudrift.ai/console';
}

// --- Provider Configuration ---

export function getRiftProviderPubApiKey(): string | null {
  return process.env.NEXT_PUBLIC_RIFT_API_KEY || null;
}

export function getRiftProviderName(): string {
  return process.env.NEXT_PUBLIC_RIFT_PROVIDER_NAME || 'CloudRift';
}

export function getRiftProviderLogo(): string {
  return process.env.NEXT_PUBLIC_RIFT_PROVIDER_LOGO || 'https://storage.googleapis.com/cloudrift-resources/images/logo/cloudrift.svg';
}

export function getRiftProviderComputeLogo(): string {
  return process.env.NEXT_PUBLIC_RIFT_PROVIDER_COMPOUND_LOGO || 'https://storage.googleapis.com/cloudrift-resources/images/logo/cloudrift_compound_white.svg';
}

// --- Feature Configuration ---

export function getWithPublicIP(): boolean {
  return (
    process.env.NEXT_PUBLIC_WITH_PUBLIC_IP === 'true' ||
    (!process.env.NEXT_PUBLIC_WITH_PUBLIC_IP &&
      process.env.NEXT_PUBLIC_VERCEL_ENV === 'production')
  );
}
