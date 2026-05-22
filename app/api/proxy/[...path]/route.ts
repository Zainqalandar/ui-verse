import { NextRequest, NextResponse } from 'next/server'

const BACKEND_BASE_URL = process.env.BACKEND_BASE_URL || 'https://expatcares.ae/api'

async function proxyRequest(req: NextRequest, params: { path?: string[] }) {
  const path = params.path?.join('/') || ''
  const targetUrl = `${BACKEND_BASE_URL}/${path}${req.nextUrl.search}`

  const headers = new Headers(req.headers)
  headers.delete('host')
  headers.delete('cookie')
  headers.delete('origin')

  const method = req.method
  const body = ['GET', 'HEAD', 'OPTIONS'].includes(method) ? undefined : await req.text()

  const response = await fetch(targetUrl, {
    method,
    headers,
    body,
    redirect: 'follow',
  })

  const responseBody = await response.arrayBuffer()
  const responseHeaders = new Headers(response.headers)

  // Remove headers that should not be forwarded back to the browser.
  responseHeaders.delete('content-encoding')
  responseHeaders.delete('transfer-encoding')

  return new NextResponse(responseBody, {
    status: response.status,
    headers: responseHeaders,
  })
}

async function getParams(context: { params: Promise<{ path: string[] }> }) {
  const params = await context.params
  return params as { path?: string[] }
}

export async function GET(req: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  return proxyRequest(req, await getParams(context))
}

export async function POST(req: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  return proxyRequest(req, await getParams(context))
}

export async function PUT(req: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  return proxyRequest(req, await getParams(context))
}

export async function PATCH(req: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  return proxyRequest(req, await getParams(context))
}

export async function DELETE(req: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  return proxyRequest(req, await getParams(context))
}

export async function OPTIONS(req: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  return proxyRequest(req, await getParams(context))
}
